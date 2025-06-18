import { CheckCircleIcon, MapPinIcon, UserGroupIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline';
import PageLayout from '../components/PageLayout';

export default function Over() {
  const features = [
    {
      icon: MapPinIcon,
      title: "Curaçao & Nederland",
      description: "Actief in beide landen met lokale expertise en netwerk"
    },
    {
      icon: UserGroupIcon,
      title: "Persoonlijke Begeleiding",
      description: "Van sollicitatie tot eerste werkdag, wij staan voor je klaar"
    },
    {
      icon: AcademicCapIcon,
      title: "Training & Coaching",
      description: "We maken je klaar voor je nieuwe uitdaging met professionele training"
    },
    {
      icon: CheckCircleIcon,
      title: "Bewezen Resultaten",
      description: "Honderden succesvolle plaatsingen en tevreden klanten"
    }
  ];

  const values = [
    {
      icon: "🤝",
      title: "Vertrouwen",
      description: "We bouwen langdurige relaties op basis van vertrouwen en betrouwbaarheid."
    },
    {
      icon: "🎯",
      title: "Kwaliteit",
      description: "We streven naar excellentie in alles wat we doen, van matching tot service."
    },
    {
      icon: "💪",
      title: "Persoonlijke Groei",
      description: "We geloven in het potentieel van elke persoon en helpen bij ontwikkeling."
    },
    {
      icon: "🌟",
      title: "Passie",
      description: "We zijn gepassioneerd over het verbinden van mensen met hun droomjob."
    }
  ];

  const team = [
    {
      name: "Maria Santos",
      role: "Directeur & Oprichter",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "15+ jaar ervaring in HR en recruitment in Curaçao en Nederland."
    },
    {
      name: "Kevin van der Berg",
      role: "Senior Consultant Nederland",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Specialist in technische functies en IT-recruitment."
    },
    {
      name: "Lisa Rodriguez",
      role: "Consultant Curaçao",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Expert in horeca, zorg en administratieve functies."
    }
  ];

  return (
    <PageLayout
      title="Over GreatJobs"
      subtitle="Jouw betrouwbare partner voor werk en carrière"
      description="We verbinden getalenteerde mensen met geweldige werkgevers in Curaçao en Nederland."
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ons verhaal
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                GreatJobs werd opgericht vanuit de overtuiging dat iedereen recht heeft op een baan 
                die bij hem of haar past. We zijn meer dan een uitzendbureau - we zijn jouw carrièrepartner.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Met jarenlange ervaring in de recruitment sector hebben we een uitgebreid netwerk 
                opgebouwd in zowel Curaçao als Nederland. We kennen de lokale arbeidsmarkt en 
                begrijpen wat werkgevers zoeken en wat werknemers nodig hebben.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Of je nu op zoek bent naar je eerste baan, een carrièreswitch wilt maken, of als 
                werkgever het juiste talent zoekt - wij staan voor je klaar met persoonlijke 
                begeleiding en professionele dienstverlening.
              </p>
              
              {/* Sectors */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Onze specialisaties:</h3>
                <div className="flex flex-wrap gap-3">
                  {['Horeca', 'Zorg', 'Bouw', 'Kantoor', 'Magazijn', 'Schoonmaak', 'Techniek'].map((sector) => (
                    <div key={sector} className="bg-[#4c4191]/10 px-4 py-2 rounded-full">
                      <span className="text-[#4c4191] font-medium text-sm">{sector}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team meeting"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#4c4191] text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Succesvolle plaatsingen</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Waarom kiezen voor GreatJobs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We onderscheiden ons door onze persoonlijke aanpak en bewezen resultaten.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#4c4191] w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Onze waarden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deze kernwaarden sturen ons dagelijks handelen en bepalen hoe we met onze klanten omgaan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ons team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ontmoet de mensen die zich dagelijks inzetten voor jouw carrière.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#4c4191] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-[#4c4191] to-[#3d357a] rounded-3xl p-8 md:p-12 text-white mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">GreatJobs in cijfers</h2>
            <p className="text-xl text-white/90">Onze resultaten spreken voor zich</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Succesvolle plaatsingen</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-white/80">Tevredenheidscore</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-white/80">Partner bedrijven</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24u</div>
              <div className="text-white/80">Gemiddelde reactietijd</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <HeartIcon className="h-16 w-16 text-[#4c4191] mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Onze missie
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              "Wij geloven dat werk meer is dan alleen een baan. Het is een plek waar je jezelf 
              kunt ontwikkelen, waar je trots op kunt zijn en waar je elke dag met plezier naartoe gaat. 
              Onze missie is om die perfecte match te maken tussen werkzoekenden en werkgevers, 
              zodat beide partijen succesvol zijn."
            </p>
            <div className="mt-8">
              <span className="text-[#4c4191] font-semibold">- Het GreatJobs Team</span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}