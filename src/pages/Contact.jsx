import { useState } from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { FaWhatsapp } from 'react-icons/fa';
import PageLayout from '../components/PageLayout';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    location: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => setSubmitted(false), 5000);
    }, 2000);
  };

  const offices = [
    {
      country: "Curaçao",
      address: "Scharlooweg 123\nWillemstad, Curaçao",
      phone: "+599 9 123 4567",
      email: "curacao@greatjobs.cw",
      hours: "Ma-Vr: 08:00 - 17:00\nZa: 09:00 - 13:00\nZo: Gesloten",
      flag: "🇨🇼"
    },
    {
      country: "Nederland",
      address: "Lange Voorhout 123\n2514 EA Den Haag",
      phone: "+31 70 123 4567",
      email: "nederland@greatjobs.nl",
      hours: "Ma-Vr: 08:00 - 17:00\nZa: 09:00 - 13:00\nZo: Gesloten",
      flag: "🇳🇱"
    }
  ];

  const contactReasons = [
    { value: '', label: 'Selecteer onderwerp' },
    { value: 'vacature', label: 'Vraag over vacature' },
    { value: 'cv', label: 'CV beoordeling' },
    { value: 'coaching', label: 'Coaching & Training' },
    { value: 'werkgever', label: 'Personeel zoeken' },
    { value: 'offerte', label: 'Offerte aanvragen' },
    { value: 'algemeen', label: 'Algemene vraag' }
  ];

  return (
    <PageLayout
      title="Contact"
      subtitle="We staan voor je klaar"
      description="Neem contact op voor al je vragen over werk, carrière en personeelsoplossingen."
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-[#4c4191] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <PhoneIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bel ons direct</h3>
            <p className="text-gray-600 mb-4">Voor urgente vragen of een persoonlijk gesprek</p>
            <div className="space-y-2">
              <p className="font-semibold text-[#4c4191]">🇨🇼 +599 9 123 4567</p>
              <p className="font-semibold text-[#4c4191]">🇳🇱 +31 70 123 4567</p>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaWhatsapp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Snelle vragen via WhatsApp</p>
            <a 
              href="https://wa.me/59991234567" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              Start chat
            </a>
          </div>

          <div className="text-center">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <EnvelopeIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">E-mail</h3>
            <p className="text-gray-600 mb-4">Voor uitgebreide vragen of documenten</p>
            <div className="space-y-1">
              <p className="text-sm text-gray-600">curacao@greatjobs.cw</p>
              <p className="text-sm text-gray-600">nederland@greatjobs.nl</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Stuur ons een bericht
            </h2>

            {submitted ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-100">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircleIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Bedankt voor je bericht!
                </h3>
                <p className="text-gray-600 mb-6">
                  We hebben je bericht ontvangen en nemen binnen 24 uur contact met je op.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-[#4c4191] font-semibold hover:text-[#3d357a] transition-colors duration-200"
                >
                  Nieuw bericht versturen →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                      placeholder="Je voor- en achternaam"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                      placeholder="je@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                      placeholder="+599 9 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Locatie voorkeur
                    </label>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecteer locatie</option>
                      <option value="curacao">Curaçao</option>
                      <option value="nederland">Nederland</option>
                      <option value="beide">Beide locaties</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Onderwerp *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                  >
                    {contactReasons.map(reason => (
                      <option key={reason.value} value={reason.value}>
                        {reason.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bericht *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                    placeholder="Beschrijf je vraag of vertel ons hoe we je kunnen helpen..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4c4191] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#3d357a] transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Bezig met verzenden...' : 'Bericht versturen'}
                </button>
              </form>
            )}
          </div>

          {/* Office Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Onze kantoren
            </h2>

            <div className="space-y-8">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-3">{office.flag}</span>
                    <h3 className="text-2xl font-bold text-gray-900">{office.country}</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPinIcon className="h-5 w-5 mt-0.5 mr-3 text-gray-400 flex-shrink-0" />
                      <div className="text-gray-600">
                        {office.address.split('\n').map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center">
                      <PhoneIcon className="h-5 w-5 mr-3 text-gray-400" />
                      <a 
                        href={`tel:${office.phone}`}
                        className="text-[#4c4191] font-semibold hover:text-[#3d357a] transition-colors duration-200"
                      >
                        {office.phone}
                      </a>
                    </div>

                    <div className="flex items-center">
                      <EnvelopeIcon className="h-5 w-5 mr-3 text-gray-400" />
                      <a 
                        href={`mailto:${office.email}`}
                        className="text-[#4c4191] font-semibold hover:text-[#3d357a] transition-colors duration-200"
                      >
                        {office.email}
                      </a>
                    </div>

                    <div className="flex items-start">
                      <ClockIcon className="h-5 w-5 mt-0.5 mr-3 text-gray-400 flex-shrink-0" />
                      <div className="text-gray-600 text-sm">
                        {office.hours.split('\n').map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Veelgestelde vragen</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Hoe snel krijg ik antwoord?</h4>
                  <p className="text-gray-600 text-sm">We streven ernaar om binnen 24 uur te reageren op alle berichten.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Kan ik langskomen zonder afspraak?</h4>
                  <p className="text-gray-600 text-sm">We adviseren om vooraf een afspraak te maken voor persoonlijk advies.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Zijn jullie diensten gratis?</h4>
                  <p className="text-gray-600 text-sm">Voor werkzoekenden zijn onze diensten altijd gratis. Werkgevers betalen alleen bij succesvolle plaatsing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}