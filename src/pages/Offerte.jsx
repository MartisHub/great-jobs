import { useState } from 'react';
import { BuildingOfficeIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import PageLayout from '../components/PageLayout';

export default function Offerte() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    employees: '',
    positions: '',
    urgency: '',
    budget: '',
    description: '',
    services: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (service) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter(s => s !== service)
      : [...formData.services, service];
    
    setFormData({
      ...formData,
      services: updatedServices
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

  const services = [
    { id: 'uitzending', label: 'Uitzending & Detachering' },
    { id: 'werving', label: 'Werving & Selectie' },
    { id: 'payroll', label: 'Payroll Services' },
    { id: 'hr', label: 'HR Consultancy' },
    { id: 'training', label: 'Training & Ontwikkeling' },
    { id: 'screening', label: 'Screening & Assessment' }
  ];

  return (
    <PageLayout
      title="Offerte Aanvragen"
      subtitle="Laat ons weten wat uw personeelsbehoeften zijn"
      description="Wij maken graag een vrijblijvende offerte op maat voor uw bedrijf."
    >
      <div className="max-w-4xl mx-auto px-6">
        {submitted ? (
          /* Success State */
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Bedankt voor uw aanvraag!
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              We hebben uw offerteaanvraag ontvangen en nemen binnen 24 uur contact met u op 
              om uw personeelsbehoeften te bespreken.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-[#4c4191] font-semibold hover:text-[#3d357a] transition-colors duration-200"
            >
              Nieuwe aanvraag →
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#4c4191] to-[#3d357a] p-8 text-white">
              <BuildingOfficeIcon className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Personeelsoplossingen op maat</h3>
              <p className="text-white/90">
                Vertel ons over uw behoeften en wij maken een passende offerte voor u.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column - Company Info */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    Bedrijfsgegevens
                  </h4>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Bedrijfsnaam *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                      placeholder="Uw bedrijfsnaam"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Contactpersoon *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                      placeholder="Voor- en achternaam"
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
                      placeholder="contact@uwbedrijf.com"
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
                      placeholder="+599 9 123 4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Branche
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecteer branche</option>
                      <option value="horeca">Horeca</option>
                      <option value="zorg">Zorg & Welzijn</option>
                      <option value="bouw">Bouw & Techniek</option>
                      <option value="logistiek">Logistiek & Transport</option>
                      <option value="kantoor">Kantoor & Administratie</option>
                      <option value="retail">Retail & Verkoop</option>
                      <option value="industrie">Industrie & Productie</option>
                      <option value="overig">Overig</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Aantal medewerkers
                    </label>
                    <select
                      name="employees"
                      value={formData.employees}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecteer aantal</option>
                      <option value="1-10">1-10 medewerkers</option>
                      <option value="11-50">11-50 medewerkers</option>
                      <option value="51-100">51-100 medewerkers</option>
                      <option value="100+">100+ medewerkers</option>
                    </select>
                  </div>
                </div>

                {/* Right Column - Requirements */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    Personeelsbehoefte
                  </h4>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Aantal posities
                    </label>
                    <input
                      type="number"
                      name="positions"
                      min="1"
                      value={formData.positions}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                      placeholder="Hoeveel mensen zoekt u?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Urgentie
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Wanneer heeft u personeel nodig?</option>
                      <option value="direct">Direct beschikbaar</option>
                      <option value="1week">Binnen 1 week</option>
                      <option value="2weeks">Binnen 2 weken</option>
                      <option value="1month">Binnen 1 maand</option>
                      <option value="later">Later dit jaar</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Budget indicatie
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Selecteer budget</option>
                      <option value="<5000">Minder dan €5.000</option>
                      <option value="5000-15000">€5.000 - €15.000</option>
                      <option value="15000-30000">€15.000 - €30.000</option>
                      <option value="30000+">Meer dan €30.000</option>
                      <option value="bespreekbaar">In overleg</option>
                    </select>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Gewenste diensten (meerdere mogelijk)
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                      {services.map((service) => (
                        <label key={service.id} className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service.id)}
                            onChange={() => handleServiceChange(service.id)}
                            className="w-4 h-4 text-[#4c4191] border-gray-300 rounded focus:ring-[#4c4191] focus:ring-2"
                          />
                          <span className="ml-3 text-sm text-gray-700">{service.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Width Description */}
              <div className="mt-8">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Aanvullende informatie
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
                  placeholder="Beschrijf uw specifieke wensen, functie-eisen, werktijden, locatie, etc."
                />
              </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#4c4191] text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-[#3d357a] transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Bezig met verzenden...' : 'Offerte Aanvragen'}
                </button>
                <p className="text-sm text-gray-500 mt-4">
                  We nemen binnen 24 uur contact met u op
                </p>
              </div>
            </form>
          </div>
        )}

        {/* Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-[#4c4191] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Snelle service</h3>
            <p className="text-gray-600 text-sm">Offerte binnen 24 uur in uw inbox</p>
          </div>
          <div className="text-center">
            <div className="bg-[#4c4191] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Op maat gemaakt</h3>
            <p className="text-gray-600 text-sm">Persoonlijke aanpak voor uw bedrijf</p>
          </div>
          <div className="text-center">
            <div className="bg-[#4c4191] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Geen verplichtingen</h3>
            <p className="text-gray-600 text-sm">Vrijblijvende offerte en advies</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}