import os
import re
import requests
from flask import Flask, request
from flask_mail import Mail, Message
from flask_cors import CORS
from werkzeug.utils import secure_filename
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)
app.secret_key = os.getenv("SECRET_KEY")

# Mail instellingen
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv("MAIL_USERNAME")
app.config['MAIL_PASSWORD'] = os.getenv("MAIL_PASSWORD")
app.config['MAIL_DEFAULT_SENDER'] = app.config['MAIL_USERNAME']

mail = Mail(app)

# Regex e-mail check
def is_email_format_valid(email):
    pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
    return re.match(pattern, email)

# Hunter verificatie
def is_email_valid_api(email):
    api_key = os.getenv("HUNTER_API_KEY")
    if not api_key:
        return True
    try:
        response = requests.get(f"https://api.hunter.io/v2/email-verifier?email={email}&api_key={api_key}")
        data = response.json().get("data", {})
        return data.get("status") == "valid" or (data.get("status") == "accept_all" and data.get("smtp_check", False))
    except Exception as e:
        print("[Hunter API error]", e)
        return False

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    email = request.form.get('email')
    subject = request.form.get('subject')
    description = request.form.get('description')
    uploaded_file = request.files.get('file')

    if not name or not email or not subject or not description:
        return "Alle velden zijn verplicht.", 400

    if not is_email_format_valid(email):
        return "E-mailadres ongeldig.", 400

    if not is_email_valid_api(email):
        return "E-mailadres kon niet worden gevalideerd.", 400

    try:
        # 📩 Bericht naar eigenaar
        msg_to_admin = Message(
            subject=f"Nieuw bericht via GreatJobs contactformulier van {name}",
            sender=email,
            recipients=[os.getenv("MAIL_USERNAME")]
        )

        msg_to_admin.html = f"""
        <div style="font-family: Arial, sans-serif; background-color: #f4f3ff; padding: 40px;">
          <div style="max-width: 600px; margin: auto; background: white; border-radius: 12px; padding: 30px; box-shadow: 0 2px 12px rgba(0,0,0,0.1);">
            <h2 style="color: #4c4191;">📩 Nieuw bericht ontvangen</h2>
            <p><strong>👤 Naam:</strong> {name}</p>
            <p><strong>📧 E-mail:</strong> {email}</p>
            <p><strong>📝 Onderwerp:</strong> {subject}</p>
            <p><strong>💬 Bericht:</strong><br>{description}</p>
            {f'<p><strong>📎 Bestand ontvangen:</strong> {secure_filename(uploaded_file.filename)}</p>' if uploaded_file and uploaded_file.filename else ''}
            <hr style="margin-top: 30px;">
            <p style="font-size: 12px; color: #888;">Verzonden via het contactformulier op de GreatJobs website.</p>
          </div>
        </div>
        """

        # 📎 Voeg bijlage toe
        if uploaded_file and uploaded_file.filename != "":
            filename = secure_filename(uploaded_file.filename)
            file_content = uploaded_file.read()
            if len(file_content) > 10 * 1024 * 1024:
                return "Bestand is te groot (max 10MB)", 400
            msg_to_admin.attach(filename, uploaded_file.content_type, file_content)

        mail.send(msg_to_admin)

        # ✅ Bevestiging naar gebruiker
        msg_to_user = Message(
            subject="Bedankt voor je bericht aan GreatJobs",
            sender=app.config['MAIL_USERNAME'],
            recipients=[email]
        )
        msg_to_user.html = f"""
        <div style="font-family: Arial; background: #f4f3ff; padding: 40px;">
          <div style="max-width: 600px; margin:auto; background: #fff; border-radius: 12px; padding: 30px; box-shadow: 0 2px 12px rgba(0,0,0,0.1);">
            <h2 style="color: #4c4191;">🎉 Bedankt {name}!</h2>
            <p>We hebben je bericht goed ontvangen en nemen spoedig contact met je op.</p>
            <p><strong>Onderwerp:</strong> {subject}</p>
            <div style="margin-top: 30px; font-size: 13px; color: #666;">
              <p>Met vriendelijke groet,</p>
              <strong style="color:#4c4191;">GreatJobs Team</strong>
              <p>📍 Curaçao & Den Haag</p>
              <p>📧 info@greatjobs.cw</p>
            </div>
          </div>
        </div>
        """
        mail.send(msg_to_user)

        return "✅ Verzonden!", 200

    except Exception as e:
        print("[MAIL ERROR]", e)
        return "❌ Er ging iets mis bij het verzenden.", 500

if __name__ == '__main__':
    app.run(debug=True)
