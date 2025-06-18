import { 
  BriefcaseIcon, 
  UserGroupIcon, 
  AcademicCapIcon, 
  DocumentTextIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

export default function Diensten() {
  const services = [
    {
      icon: BriefcaseIcon,
      title: "Vacaturebemiddeling",
      description: "We matchen jou met de perfecte baan die bij je vaardigheden en ambities past.",
      features: ["Persoonlijk intakegesprek", "Actieve matching", "Begeleiding tijdens proces"],
      forWho: "Voor werkzoekenden",
      color: "bg-blue-500"
    },
    {
      icon: BuildingOfficeIcon,
      title: "Uitzending & Detachering",
      description: "Flexibele personeelsoplossingen voor bedrijven die tijdelijk of permanent personeel zoeken.",
      features: ["Tijdelijke uitzending", "Detachering specialisten", "Payroll services"],
      forWho: "Voor werkgevers",
      color: "bg-green-500"
    },
    {
      icon: UserGroupIcon,
      title: "Werving & Selectie",
      description: "Complete werving en selectie van personeel, van vacaturetekst tot arbeidscontract.",
      features: ["Vacature opstellen", "Kandidaten screenen", "Selectiegesprekken"],
      forWho: "Voor werkgevers",
      color: "bg-purple-500"
    },
    {
      icon: AcademicCapIcon,
      title: "Training & Coaching",
      description: "Professionele training om je voor te bereiden op je nieuwe uitdaging.",
      features: ["Sollicitatietraining", "Vaardighedentraining", "Persoonlijke coaching"],
      forWho: "Voor werkzoekenden",
      color: "bg-orange-500"
    },
    {
      icon: DocumentTextIcon,
      title: "CV Optimalisatie",
      description: "We helpen je CV op te stellen dat werkgevers direct overtuigt.",
      features: ["CV review", "Professionele opmaak", "LinkedIn optimalisatie"],
      forWho: "Voor werkzoekenden",
      color: "bg-red-500"
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Screening & Assessment",
      description: "Uitgebreide screening van kandidaten om de juiste match te garanderen.",
      features: ["Referentiecheck", "Competentie assessment", "Persoonlijkheidstest"],
      forWho: "Voor werkgevers",
      color: "bg-indigo-500"
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: "Carrièrebegeleiding",
      description: "Langetermijn begeleiding voor jouw carrièreontwikkeling.",
      features: ["Carrièreplanning", "Ontwikkeladvies", "Netwerk uitbreiding"],
      forWho: "Voor werkzoekenden",
      color: "bg-pink-500"
    },
    {
      icon: CogIcon,
      title: "HR Consultancy",
      description: "Strategisch HR-advies voor optimalisatie van uw personeelsbeleid.",
      features: ["HR-beleid ontwikkeling", "Organisatie-advies", "Proces optimalisatie"],
      forWho: "Voor werkgevers",
      color: "bg-teal-500"
    }
  ];

  const workSeekerServices = services.filter(service => service.forWho === "Voor werkzoekenden");
  const employerServices = services.filter(service => service.forWho === "Voor werkgevers");

  return (
    <PageLayout
      title="Onze Diensten"
      subtitle="Complete HR-oplossingen voor werkzoekenden en werkgevers"
      description="Van vacaturebemiddeling tot persoonlijke coaching - we bieden alles wat je nodig hebt voor een succesvolle carrière."
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Services for Job Seekers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Voor Werkzoekenden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wij helpen je bij elke stap van je carrière, van het vinden van de juiste baan 
              tot persoonlijke ontwikkeling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workSeekerServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Services for Employers */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Voor Werkgevers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete HR-ondersteuning voor het vinden, selecteren en behouden van het juiste talent.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {employerServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-[#4c4191] to-[#3d357a] rounded-3xl p-8 md:p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hoe werken wij?</h2>
            <p className="text-xl text-white/90">
              Ons bewezen proces zorgt voor de beste resultaten
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="font-semibold mb-2">Intake</h3>
              <p className="text-white/80 text-sm">Persoonlijk gesprek om uw behoeften te begrijpen</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="font-semibold mb-2">Matching</h3>
              <p className="text-white/80 text-sm">Actief zoeken naar de perfecte match</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="font-semibold mb-2">Begeleiding</h3>
              <p className="text-white/80 text-sm">Ondersteuning tijdens het hele proces</p>
            </div>
            <div className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="font-semibold mb-2">Nazorg</h3>
              <p className="text-white/80 text-sm">Follow-up voor een succesvolle start</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Klaar om te beginnen?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Neem contact op en ontdek hoe wij u kunnen helpen met uw carrière of personeelsbehoeften.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/inschrijven"
              className="bg-[#4c4191] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#3d357a] transition-colors duration-200 transform hover:scale-105"
            >
              Ik zoek werk
            </Link>
            <Link 
              to="/offerte"
              className="border-2 border-[#4c4191] text-[#4c4191] px-8 py-4 rounded-full font-semibold hover:bg-[#4c4191] hover:text-white transition-all duration-200"
            >
              Ik zoek personeel
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="group bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      {/* Icon */}
      <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <service.icon className="h-7 w-7 text-white" />
      </div>

      {/* Content */}
      <div className="mb-3">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
          {service.forWho}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-3">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-1 mb-4">
        {service.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center text-xs text-gray-500">
            <div className="w-1 h-1 bg-[#4c4191] rounded-full mr-2"></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="text-[#4c4191] font-semibold text-sm hover:text-[#3d357a] transition-colors duration-200 group-hover:translate-x-1 transform">
        Meer informatie →
      </button>
    </div>
  );
}