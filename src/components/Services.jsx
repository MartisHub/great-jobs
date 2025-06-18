import { 
  BriefcaseIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  DocumentTextIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    {
      icon: BriefcaseIcon,
      title: "Vacaturebemiddeling",
      description: "We matchen jou met de perfecte baan die bij je vaardigheden en ambities past.",
      features: ["Persoonlijk intakegesprek", "Actieve matching", "Begeleiding tijdens proces"]
    },
    {
      icon: AcademicCapIcon,
      title: "Training & Coaching",
      description: "Professionele training om je voor te bereiden op je nieuwe uitdaging.",
      features: ["Sollicitatietraining", "Vaardighedentraining", "Persoonlijke coaching"]
    },
    {
      icon: DocumentTextIcon,
      title: "CV Optimalisatie",
      description: "We helpen je CV op te stellen dat werkgevers direct overtuigt.",
      features: ["CV review", "Professionele opmaak", "LinkedIn optimalisatie"]
    },
    {
      icon: BuildingOfficeIcon,
      title: "Voor Werkgevers",
      description: "Complete HR-ondersteuning voor het vinden van het juiste talent.",
      features: ["Werving & selectie", "Screening kandidaten", "Tijdelijke uitzending"]
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Carrièrebegeleiding",
      description: "Langetermijn begeleiding voor jouw carrièreontwikkeling.",
      features: ["Carrièreplanning", "Ontwikkeladvies", "Netwerk uitbreiding"]
    },
    {
      icon: UserGroupIcon,
      title: "Groepstrainingen",
      description: "Workshops en trainingen voor teams en groepen werkzoekenden.",
      features: ["Teambuilding", "Communicatietraining", "Leiderschapsontwikkeling"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Onze Diensten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Van vacaturebemiddeling tot persoonlijke coaching - we bieden alles 
            wat je nodig hebt voor een succesvolle carrière.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon */}
              <div className="bg-[#4c4191] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-[#4c4191] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-6 text-[#4c4191] font-semibold text-sm hover:text-[#3d357a] transition-colors duration-200 group-hover:translate-x-1 transform">
                Meer informatie →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-[#4c4191] rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Klaar om te beginnen?
            </h3>
            <p className="text-xl mb-8 text-white/90">
              Neem contact op en ontdek hoe wij jou kunnen helpen met je carrière.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#4c4191] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                Gratis Consult Boeken
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#4c4191] transition-all duration-200">
                Offerte Aanvragen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}