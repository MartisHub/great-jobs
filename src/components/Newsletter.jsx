import { useState } from 'react';
import { EnvelopeIcon, NewspaperIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function Newsletter() {
  const [email, setEmail] = useState('');
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
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const blogPosts = [
    {
      title: "5 Tips voor een succesvolle sollicitatie",
      excerpt: "Ontdek hoe je jezelf het beste kunt presenteren tijdens een sollicitatiegesprek.",
      date: "15 Jan 2025",
      icon: BriefcaseIcon,
      readTime: "3 min"
    },
    {
      title: "Carrière switchen: waar moet je op letten?",
      excerpt: "Een nieuwe carrière beginnen kan spannend zijn. Deze tips helpen je op weg.",
      date: "12 Jan 2025",
      icon: AcademicCapIcon,
      readTime: "5 min"
    },
    {
      title: "De arbeidsmarkt in Curaçao: trends 2025",
      excerpt: "Een overzicht van de meest gevraagde banen en sectoren dit jaar.",
      date: "8 Jan 2025",
      icon: NewspaperIcon,
      readTime: "4 min"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blijf op de hoogte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontvang wekelijks de nieuwste vacatures, carrièretips en arbeidsmarkt updates 
            direct in je inbox.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Newsletter Signup */}
          <div className="bg-gradient-to-br from-[#4c4191] to-[#3d357a] rounded-3xl p-8 md:p-12 text-white">
            <div className="mb-8">
              <EnvelopeIcon className="h-12 w-12 mb-4" />
              <h3 className="text-3xl font-bold mb-4">
                Nieuwsbrief
              </h3>
              <p className="text-white/90 text-lg">
                Mis geen enkele kans! Ontvang wekelijks:
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Nieuwe vacatures die bij jou passen
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Carrièretips van onze experts
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Arbeidsmarkt trends en insights
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Exclusieve events en workshops
              </li>
            </ul>

            {submitted ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="text-2xl mb-2">✅</div>
                <p className="font-semibold">Bedankt voor je aanmelding!</p>
                <p className="text-sm text-white/80 mt-1">Je ontvangt binnenkort onze nieuwsbrief.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="je@email.com"
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-[#4c4191] px-6 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 disabled:opacity-50"
                >
                  {isSubmitting ? 'Bezig...' : 'Aanmelden voor nieuwsbrief'}
                </button>
              </form>
            )}

            <p className="text-xs text-white/60 mt-4 text-center">
              Je kunt je altijd weer afmelden. We respecteren je privacy.
            </p>
          </div>

          {/* Blog Posts */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Laatste carrièretips
            </h3>
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <article 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors duration-200 cursor-pointer group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#4c4191] w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <post.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime} lezen</span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#4c4191] transition-colors duration-200">
                        {post.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="mt-3">
                        <span className="text-[#4c4191] text-sm font-medium group-hover:underline">
                          Lees meer →
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="text-[#4c4191] font-semibold hover:text-[#3d357a] transition-colors duration-200">
                Alle artikelen bekijken →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}