import { useState } from 'react';
import { MagnifyingGlassIcon, MapPinIcon, ClockIcon, CurrencyEuroIcon } from '@heroicons/react/24/outline';

export default function JobSearch() {
  const [filters, setFilters] = useState({
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
      description: "Ervaren kok gezocht voor druk restaurant in het centrum van Willemstad.",
      posted: "2 dagen geleden",
      sector: "horeca"
    },
    {
      id: 2,
      title: "Verzorgende IG",
      company: "Zorgcentrum Bonaire",
      location: "Kralendijk, Bonaire",
      type: "Parttime",
      salary: "€2.000 - €2.400",
      description: "Zorgverlener voor ouderenzorg met hart voor de zorg.",
      posted: "1 week geleden",
      sector: "zorg"
    },
    {
      id: 3,
      title: "Administratief Medewerker",
      company: "ABC Accountants",
      location: "Den Haag, Nederland",
      type: "Fulltime",
      salary: "€2.500 - €3.200",
      description: "Allround administratief medewerker voor groeiend accountantskantoor.",
      posted: "3 dagen geleden",
      sector: "kantoor"
    },
    {
      id: 4,
      title: "Magazijnmedewerker",
      company: "LogiCorp",
      location: "Rotterdam, Nederland",
      type: "Fulltime",
      salary: "€2.300 - €2.700",
      description: "Ervaren magazijnmedewerker voor moderne distributiecentrum.",
      posted: "5 dagen geleden",
      sector: "magazijn"
    },
    {
      id: 5,
      title: "Schoonmaker",
      company: "CleanPro Services",
      location: "Willemstad, Curaçao",
      type: "Parttime",
      salary: "€1.800 - €2.200",
      description: "Betrouwbare schoonmaker voor kantoorgebouwen.",
      posted: "1 dag geleden",
      sector: "schoonmaak"
    },
    {
      id: 6,
      title: "Timmerman",
      company: "BouwMeester",
      location: "Amsterdam, Nederland",
      type: "Fulltime",
      salary: "€3.000 - €3.800",
      description: "Ervaren timmerman voor woningbouw projecten.",
      posted: "4 dagen geleden",
      sector: "bouw"
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
      (filters.sector === '' || job.sector === filters.sector) &&
      (filters.location === '' || job.location.toLowerCase().includes(filters.location)) &&
      (filters.type === '' || job.type.toLowerCase() === filters.type)
    );
  });

  return (
    <section className="py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Vind jouw perfecte baan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek honderden vacatures in Curaçao en Nederland. Van horeca tot zorg, 
            van kantoor tot bouw - jouw droomjob wacht op je.
          </p>
        </div>

        {/* Search Filters */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-12">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Zoek op functietitel..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent"
              />
            </div>
            
            <select
              value={filters.location}
              onChange={(e) => setFilters({...filters, location: e.target.value})}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent"
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
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent"
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
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#4c4191] focus:border-transparent"
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
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          {filteredJobs.map((job) => (
            <div 
              key={job.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
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
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="bg-white text-[#4c4191] border-2 border-[#4c4191] px-8 py-3 rounded-full font-semibold hover:bg-[#4c4191] hover:text-white transition-all duration-200">
            Meer vacatures laden
          </button>
        </div>
      </div>
    </section>
  );
}