import { CheckCircleIcon, MapPinIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function About() {
  const features = [
    {
      icon: MapPinIcon,
      title: "Curaçao & Nederland",
      description: "Actief in beide landen met lokale expertise"
    },
    {
      icon: UserGroupIcon,
      title: "Persoonlijke Begeleiding",
      description: "Van sollicitatie tot eerste werkdag"
    },
    {
      icon: AcademicCapIcon,
      title: "Training & Coaching",
      description: "We maken je klaar voor je nieuwe uitdaging"
    },
    {
      icon: CheckCircleIcon,
      title: "Bewezen Resultaten",
      description: "Honderden succesvolle plaatsingen"
    }
  ];

  return (
    <section className="py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Wie zijn wij?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            GreatJobs is jouw betrouwbare partner voor werk en carrière. We verbinden 
            getalenteerde mensen met geweldige werkgevers in Curaçao en Nederland.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ons verhaal
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Bij GreatJobs geloven we dat iedereen recht heeft op een baan die bij hem of haar past. 
                We zijn meer dan een uitzendbureau - we zijn jouw carrièrepartner.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Of je nu op zoek bent naar je eerste baan, een carrièreswitch wilt maken, of als werkgever 
                het juiste talent zoekt - wij staan voor je klaar met persoonlijke begeleiding en 
                professionele dienstverlening.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#4c4191]/10 px-4 py-2 rounded-full">
                  <span className="text-[#4c4191] font-medium">Horeca</span>
                </div>
                <div className="bg-[#4c4191]/10 px-4 py-2 rounded-full">
                  <span className="text-[#4c4191] font-medium">Zorg</span>
                </div>
                <div className="bg-[#4c4191]/10 px-4 py-2 rounded-full">
                  <span className="text-[#4c4191] font-medium">Bouw</span>
                </div>
                <div className="bg-[#4c4191]/10 px-4 py-2 rounded-full">
                  <span className="text-[#4c4191] font-medium">Kantoor</span>
                </div>
                <div className="bg-[#4c4191]/10 px-4 py-2 rounded-full">
                  <span className="text-[#4c4191] font-medium">Magazijn</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
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
      </div>
    </section>
  );
}