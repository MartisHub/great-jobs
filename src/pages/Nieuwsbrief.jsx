import { useState } from 'react';
import { EnvelopeIcon, NewspaperIcon, BriefcaseIcon, AcademicCapIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import PageLayout from '../components/PageLayout';

export default function Nieuwsbrief() {
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setEmail('');
      setPreferences([]);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  const handlePreferenceChange = (preference) => {
    setPreferences(prev => 
      prev.includes(preference) 
        ? prev.filter(p => p !== preference)
        : [...prev, preference]
    );
  };

  const newsletterBenefits = [
    {
      icon: BriefcaseIcon,
      title: "Nieuwe vacatures",
      description: "Wees de eerste die hoort over nieuwe kansen die bij jou passen"
    },
    {
      icon: AcademicCapIcon,
      title: "Carrièretips",
      description: "Praktische tips van onze experts voor je carrièreontwikkeling"
    },
    {
      icon: NewspaperIcon,
      title: "Arbeidsmarkt trends",
      description: "Blijf op de hoogte van ontwikkelingen in jouw sector"
    },
    {
      icon: EnvelopeIcon,
      title: "Exclusieve content",
      description: "Toegang tot speciale events, workshops en trainingen"
    }
  ];

  const blogPosts = [
    {
      title: "5 Tips voor een succesvolle sollicitatie in 2025",
      excerpt: "Ontdek hoe je jezelf het beste kunt presenteren tijdens een sollicitatiegesprek en wat werkgevers echt zoeken.",
      date: "15 Jan 2025",
      readTime: "3 min",
      category: "Solliciteren"
    },
    {
      title: "Carrière switchen: waar moet je op letten?",
      excerpt: "Een nieuwe carrière beginnen kan spannend zijn. Deze praktische tips helpen je op weg naar een succesvolle switch.",
      date: "12 Jan 2025",
      readTime: "5 min",
      category: "Carrière"
    },
    {
      title: "De arbeidsmarkt in Curaçao: trends en kansen 2025",
      excerpt: "Een overzicht van de meest gevraagde banen en sectoren dit jaar, plus waar de beste kansen liggen.",
      date: "8 Jan 2025",
      readTime: "4 min",
      category: "Trends"
    },
    {
      title: "LinkedIn optimaliseren: zo val je op bij recruiters",
      excerpt: "Praktische tips om je LinkedIn profiel te verbeteren en meer zichtbaar te worden voor werkgevers.",
      date: "5 Jan 2025",
      readTime: "6 min",
      category: "Online Profiel"
    },
    {
      title: "Salaris onderhandelen: doe's en don'ts",
      excerpt: "Leer hoe je professioneel over salaris kunt onderhandelen en wat je moet vermijden tijdens het gesprek.",
      date: "2 Jan 2025",
      readTime: "4 min",
      category: "Onderhandelen"
    },
    {
      title: "Thuiswerken vs kantoor: wat past bij jou?",
      excerpt: "De voor- en nadelen van verschillende werkvormen en hoe je de juiste keuze maakt voor jouw situatie.",
      date: "28 Dec 2024",
      readTime: "3 min",
      category: "Werkvormen"
    }
  ];

  const preferenceOptions = [
    { id: 'vacatures-curacao', label: 'Vacatures Curaçao' },
    { id: 'vacatures-nederland', label: 'Vacatures Nederland' },
    { id: 'carriere-tips', label: 'Carrièretips' },
    { id: 'training-events', label: 'Trainingen & Events' },
    { id: 'arbeidsmarkt', label: 'Arbeidsmarkt nieuws' }
  ];

  return (
    <PageLayout
      title="Nieuwsbrief"
      subtitle="Blijf op de hoogte van de nieuwste vacatures en carrièretips"
      description="Ontvang wekelijks de beste kansen en professioneel advies direct in je inbox."
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Newsletter Signup */}
          <div className="bg-gradient-to-br from-[#4c4191] to-[#3d357a] rounded-3xl p-8 md:p-12 text-white">
            {submitted ? (
              <div className="text-center">
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircleIcon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Welkom bij GreatJobs!
                </h3>
                <p className="text-white/90 mb-8">
                  Je bent succesvol aangemeld voor onze nieuwsbrief. Je ontvangt binnenkort 
                  je eerste editie met de nieuwste vacatures en carrièretips.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-white font-semibold hover:text-white/80 transition-colors duration-200"
                >
                  Nieuwe aanmelding →
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <EnvelopeIcon className="h-12 w-12 mb-4" />
                  <h3 className="text-3xl font-bold mb-4">
                    Meld je aan voor onze nieuwsbrief
                  </h3>
                  <p className="text-white/90 text-lg">
                    Ontvang wekelijks de nieuwste vacatures, carrièretips en arbeidsmarkt updates.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-white mb-2">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="je@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-white mb-3">
                      Wat wil je ontvangen? (optioneel)
                    </label>
                    <div className="space-y-2">
                      {preferenceOptions.map((option) => (
                        <label key={option.id} className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences.includes(option.id)}
                            onChange={() => handlePreferenceChange(option.id)}
                            className="w-4 h-4 text-white border-white/30 rounded focus:ring-white/50 focus:ring-2 bg-white/10"
                          />
                          <span className="ml-3 text-sm text-white/90">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-white text-[#4c4191] px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Bezig met aanmelden...' : 'Aanmelden voor nieuwsbrief'}
                  </button>
                </form>

                <p className="text-xs text-white/60 mt-4 text-center">
                  Je kunt je altijd weer afmelden. We respecteren je privacy en delen je gegevens nooit.
                </p>
              </>
            )}
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Wat krijg je van ons?
            </h3>
            <div className="space-y-6">
              {newsletterBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-[#4c4191] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Blog Posts */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recente carrièretips
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontdek onze nieuwste artikelen vol praktische tips voor je carrière.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#4c4191]/10 text-[#4c4191] px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <button className="text-[#4c4191] font-semibold text-sm hover:text-[#3d357a] transition-colors duration-200">
                    Lees meer →
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#4c4191] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3d357a] transition-colors duration-200">
              Alle artikelen bekijken
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}