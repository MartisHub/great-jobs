import { useState } from 'react';
import { CloudArrowUpIcon, DocumentTextIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function CVUpload() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    availability: '',
    experience: '',
    preferences: ''
  });
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName('');
    }
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

  return (
    <section className="py-20 bg-[#F5F5DC]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Laat je CV achter
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload je CV en we nemen binnen 24 uur contact met je op voor een 
            persoonlijk gesprek over jouw carrièremogelijkheden.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {submitted ? (
            /* Success State */
            <div className="p-12 text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Bedankt voor je aanmelding!
              </h3>
              <p className="text-gray-600 mb-8">
                We hebben je gegevens ontvangen en nemen binnen 24 uur contact met je op 
                voor een persoonlijk gesprek over jouw carrièremogelijkheden.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-[#4c4191] font-semibold hover:text-[#3d357a] transition-colors duration-200"
              >
                Nieuwe aanmelding →
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Volledige naam *
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

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefoonnummer *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                      placeholder="+599 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Beschikbaarheid
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecteer beschikbaarheid</option>
                      <option value="direct">Direct beschikbaar</option>
                      <option value="1week">Binnen 1 week</option>
                      <option value="2weeks">Binnen 2 weken</option>
                      <option value="1month">Binnen 1 maand</option>
                      <option value="later">Later</option>
                    </select>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Upload je CV *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        name="cv"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        required
                      />
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#4c4191] transition-colors duration-200">
                        <CloudArrowUpIcon className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        {fileName ? (
                          <div>
                            <DocumentTextIcon className="h-8 w-8 text-[#4c4191] mx-auto mb-2" />
                            <p className="text-sm font-medium text-gray-900">{fileName}</p>
                            <p className="text-xs text-gray-500 mt-1">Klik om een ander bestand te kiezen</p>
                          </div>
                        ) : (
                          <div>
                            <p className="text-sm font-medium text-gray-900 mb-1">
                              Sleep je CV hierheen of klik om te uploaden
                            </p>
                            <p className="text-xs text-gray-500">
                              PDF, DOC of DOCX (max 10MB)
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Werkervaring (jaren)
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecteer ervaring</option>
                      <option value="0-1">0-1 jaar</option>
                      <option value="1-3">1-3 jaar</option>
                      <option value="3-5">3-5 jaar</option>
                      <option value="5-10">5-10 jaar</option>
                      <option value="10+">10+ jaar</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Full Width Fields */}
              <div className="mt-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Voorkeuren en opmerkingen
                </label>
                <textarea
                  name="preferences"
                  value={formData.preferences}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                  placeholder="Vertel ons over je voorkeuren qua werk, locatie, werktijden, etc."
                />
              </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#4c4191] text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-[#3d357a] transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Bezig met verzenden...' : 'CV Versturen'}
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We nemen binnen 24 uur contact met je op
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-[#4c4191] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Snelle reactie</h3>
            <p className="text-gray-600 text-sm">We nemen binnen 24 uur contact op</p>
          </div>
          <div className="text-center">
            <div className="bg-[#4c4191] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Persoonlijke matching</h3>
            <p className="text-gray-600 text-sm">We zoeken banen die bij jou passen</p>
          </div>
          <div className="text-center">
            <div className="bg-[#4c4191] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Gratis begeleiding</h3>
            <p className="text-gray-600 text-sm">Coaching en training inbegrepen</p>
          </div>
        </div>
      </div>
    </section>
  );
}