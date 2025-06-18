import { StarIcon } from '@heroicons/react/24/solid';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Verzorgende IG",
      location: "Curaçao",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "GreatJobs heeft mij niet alleen geholpen met het vinden van een baan, maar ook met training om me voor te bereiden. Nu werk ik al 2 jaar met veel plezier in de zorg.",
      rating: 5
    },
    {
      name: "Kevin van der Berg",
      role: "Administratief Medewerker",
      location: "Nederland",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Dankzij de persoonlijke begeleiding van GreatJobs heb ik snel een baan gevonden die perfect bij mij past. Hun aanpak is echt professioneel en persoonlijk.",
      rating: 5
    },
    {
      name: "Restaurant Paradise",
      role: "Werkgever",
      location: "Curaçao",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "GreatJobs levert altijd gekwalificeerd personeel. Hun screening proces is uitstekend en de kandidaten zijn goed voorbereid. Een betrouwbare partner.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Kok",
      location: "Curaçao",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Ik was lang werkloos, maar GreatJobs heeft me geholpen met sollicitatietraining en CV verbetering. Nu heb ik een geweldige baan in de horeca!",
      rating: 5
    },
    {
      name: "ABC Accountants",
      role: "Werkgever",
      location: "Nederland",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "We werken al jaren samen met GreatJobs voor onze personeelsbehoeften. Hun service is uitstekend en ze begrijpen echt wat wij zoeken in kandidaten.",
      rating: 5
    },
    {
      name: "Carlos Martina",
      role: "Magazijnmedewerker",
      location: "Nederland",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      text: "Van Curaçao naar Nederland verhuizen voor werk was spannend, maar GreatJobs heeft me door het hele proces begeleid. Fantastische service!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Wat onze klanten zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek waarom honderden werkzoekenden en werkgevers ons vertrouwen 
            voor hun carrière en personeelsbehoeften.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-[#4c4191] font-medium">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-[#4c4191] rounded-3xl p-8 md:p-12 text-white">
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
      </div>
    </section>
  );
}