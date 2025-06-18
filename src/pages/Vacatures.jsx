import { useState } from 'react';
import { MagnifyingGlassIcon, MapPinIcon, ClockIcon, CurrencyEuroIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import PageLayout from '../components/PageLayout';

export default function Vacatures() {
  const [filters, setFilters] = useState({
    search: '',
    location: '',
    sector: '',
    type: ''
  });

  const jobs = [
    {
      id: 1,
      title: "Kok",
      company: "Restaurant Paradise",
      location: "Willemstad, Curaçao",
      type: "Fulltime",
      salary: "€2.200 - €2.800",
      description: "Ervaren kok gezocht voor druk restaurant in het centrum van Willemstad. Je werkt in een professionele keuken met een enthousiast team.",
      posted: "2 dagen geleden",
      sector: "horeca",
      requirements: ["Minimaal 2 jaar ervaring", "Flexibel en stressbestendig", "Teamplayer"],
      featured: true
    },
    {
      id: 2,
      title: "Verzorgende IG",
      company: "Zorgcentrum Bonaire",
      location: "Kralendijk, Bonaire",
      type: "Parttime",
      salary: "€2.000 - €2.400",
      description: "Zorgverlener voor ouderenzorg met hart voor de zorg. Je werkt in een kleinschalige setting met persoonlijke aandacht.",
      posted: "1 week geleden",
      sector: "zorg",
      requirements: ["IG diploma vereist", "Empathisch en geduldig", "Rijbewijs gewenst"]
    },
    {
      id: 3,
      title: "Administratief Medewerker",
      company: "ABC Accountants",
      location: "Den Haag, Nederland",
      type: "Fulltime",
      salary: "€2.500 - €3.200",
      description: "Allround administratief medewerker voor groeiend accountantskantoor. Je ondersteunt bij diverse administratieve taken.",
      posted: "3 dagen geleden",
      sector: "kantoor",
      requirements: ["MBO werk- en denkniveau", "Ervaring met Excel", "Nauwkeurig werken"],
      featured: true
    },
    {
      id: 4,
      title: "Magazijnmedewerker",
      company: "LogiCorp",
      location: "Rotterdam, Nederland",
      type: "Fulltime",
      salary: "€2.300 - €2.700",
      description: "Ervaren magazijnmedewerker voor moderne distributiecentrum. Je werkt met de nieuwste technieken en systemen.",
      posted: "5 dagen geleden",
      sector: "magazijn",
      requirements: ["Heftruckcertificaat", "Fysiek zwaar werk", "Ploegendienst mogelijk"]
    },
    {
      id: 5,
      title: "Schoonmaker",
      company: "CleanPro Services",
      location: "Willemstad, Curaçao",
      type: "Parttime",
      salary: "€1.800 - €2.200",
      description: "Betrouwbare schoonmaker voor kantoorgebouwen. Werk in de avonduren met flexibele uren.",
      posted: "1 dag geleden",
      sector: "schoonmaak",
      requirements: ["Betrouwbaar en zelfstandig", "Eigen vervoer", "Flexibele werktijden"]
    },
    {
      id: 6,
      title: "Timmerman",
      company: "BouwMeester",
      location: "Amsterdam, Nederland",
      type: "Fulltime",
      salary: "€3.000 - €3.800",
      description: "Ervaren timmerman voor woningbouw projecten. Je werkt aan diverse nieuwbouwprojecten in de regio Amsterdam.",
      posted: "4 dagen geleden",
      sector: "bouw",
      requirements: ["Minimaal 5 jaar ervaring", "VCA certificaat", "Eigen gereedschap"],
      featured: true
    }
  ];

  const sectors = [
    { value: '', label: 'Alle sectoren' },
    { value: 'horeca', label: 'Horeca' },
    { value: 'zorg', label: 'Zorg' },
    { value: 'kantoor', label: 'Kantoor' },
    { value: 'magazijn', label: 'Magazijn' },
    { value: 'schoonmaak', label: 'Schoonmaak' },
    { value: 'bouw', label: 'Bouw' }
  ];

  const locations = [
    { value: '', label: 'Alle locaties' },
    { value: 'curacao', label: 'Curaçao' },
    { value: 'nederland', label: 'Nederland' },
    { value: 'bonaire', label: 'Bonaire' }
  ];

  const types = [
    { value: '', label: 'Alle contracten' },
    { value: 'fulltime', label: 'Fulltime' },
    { value: 'parttime', label: 'Parttime' },
    { value: 'tijdelijk', label: 'Tijdelijk' }
  ];

  const filteredJobs = jobs.filter(job => {
    return (
      (filters.search === '' || job.title.toLowerCase().includes(filters.search.toLowerCase()) || 
       job.company.toLowerCase().includes(filters.search.toLowerCase())) &&
      (filters.sector === '' || job.sector === filters.sector) &&
      (filters.location === '' || job.location.toLowerCase().includes(filters.location)) &&
      (filters.type === '' || job.type.toLowerCase() === filters.type)
    );
  });

  const featuredJobs = filteredJobs.filter(job => job.featured);
  const regularJobs = filteredJobs.filter(job => !job.featured);

  return (
    <PageLayout
      title="Vacatures"
      subtitle="Ontdek jouw perfecte baan in Curaçao en Nederland"
      description="Van horeca tot zorg, van kantoor tot bouw - vind de baan die bij jou past."
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Search Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-12 border border-gray-100">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative lg:col-span-2">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Zoek op functietitel of bedrijf..."
                value={filters.search}
                onChange={(e) => setFilters({...filters, search: e.target.value})}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <select
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
            >
              {locations.map(location => (
                <option key={location.value} value={location.value}>
                  {location.label}
                </option>
              ))}
            </select>

            <select
              value={filters.sector}
              onChange={(e) => setFilters({...filters, sector: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
            >
              {sectors.map(sector => (
                <option key={sector.value} value={sector.value}>
                  {sector.label}
                </option>
              ))}
            </select>

            <select
              value={filters.type}
              onChange={(e) => setFilters({...filters, type: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent transition-all duration-200"
            >
              {types.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            <span className="font-semibold text-[#4c4191]">{filteredJobs.length}</span> vacatures gevonden
            {filters.search && (
              <span className="ml-2">voor "<span className="font-medium">{filters.search}</span>"</span>
            )}
          </p>
        </div>

        {/* Featured Jobs */}
        {featuredJobs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <BriefcaseIcon className="h-6 w-6 mr-2 text-[#4c4191]" />
              Uitgelichte vacatures
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredJobs.map((job) => (
                <JobCard key={job.id} job={job} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Regular Jobs */}
        {regularJobs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Alle vacatures
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {regularJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <BriefcaseIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Geen vacatures gevonden
            </h3>
            <p className="text-gray-600 mb-6">
              Probeer je zoekopdracht aan te passen of bekijk alle beschikbare vacatures.
            </p>
            <button 
              onClick={() => setFilters({ search: '', location: '', sector: '', type: '' })}
              className="bg-[#4c4191] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#3d357a] transition-colors duration-200"
            >
              Alle vacatures tonen
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredJobs.length > 0 && (
          <div className="text-center">
            <button className="bg-white text-[#4c4191] border-2 border-[#4c4191] px-8 py-3 rounded-full font-semibold hover:bg-[#4c4191] hover:text-white transition-all duration-200">
              Meer vacatures laden
            </button>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

function JobCard({ job, featured = false }) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border ${
      featured ? 'border-[#4c4191] ring-2 ring-[#4c4191]/10' : 'border-gray-100'
    }`}>
      {featured && (
        <div className="bg-[#4c4191] text-white px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block">
          ⭐ Uitgelicht
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-1">
            {job.title}
          </h3>
          <p className="text-[#4c4191] font-semibold">
            {job.company}
          </p>
        </div>
        <span className="bg-[#4c4191]/10 text-[#4c4191] px-3 py-1 rounded-full text-sm font-medium">
          {job.type}
        </span>
      </div>

      <p className="text-gray-600 mb-4 leading-relaxed">
        {job.description}
      </p>

      {/* Requirements */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Vereisten:</h4>
        <ul className="space-y-1">
          {job.requirements.map((req, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <div className="w-1.5 h-1.5 bg-[#4c4191] rounded-full mr-2"></div>
              {req}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
        <div className="flex items-center">
          <MapPinIcon className="h-4 w-4 mr-1" />
          {job.location}
        </div>
        <div className="flex items-center">
          <CurrencyEuroIcon className="h-4 w-4 mr-1" />
          {job.salary}
        </div>
        <div className="flex items-center">
          <ClockIcon className="h-4 w-4 mr-1" />
          {job.posted}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-600 capitalize">
          {job.sector}
        </div>
        <button className="bg-[#4c4191] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3d357a] transition-colors duration-200">
          Solliciteren
        </button>
      </div>
    </div>
  );
}