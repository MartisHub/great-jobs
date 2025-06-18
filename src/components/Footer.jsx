import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="/greatjobs-logo.png"
              alt="GreatJobs Logo"
              className="h-16 mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              GreatJobs verbindt getalenteerde mensen met geweldige werkgevers 
              in Curaçao en Nederland. Jouw carrière is onze missie.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#4c4191] p-3 rounded-full hover:bg-[#3d357a] transition-colors duration-200">
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a href="#" className="bg-[#4c4191] p-3 rounded-full hover:bg-[#3d357a] transition-colors duration-200">
                <FaInstagram className="h-4 w-4" />
              </a>
              <a href="#" className="bg-[#4c4191] p-3 rounded-full hover:bg-[#3d357a] transition-colors duration-200">
                <FaLinkedinIn className="h-4 w-4" />
              </a>
              <a href="#" className="bg-green-600 p-3 rounded-full hover:bg-green-700 transition-colors duration-200">
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Snelle Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Vacatures Curaçao</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Vacatures Nederland</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Online Inschrijven</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">CV Upload</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Onze Diensten</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Over Ons</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Voor Werkgevers</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Offerte Aanvragen</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Werving & Selectie</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Uitzendkrachten</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">HR Consultancy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Tarieven</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            
            {/* Curaçao Office */}
            <div className="mb-6">
              <h4 className="font-medium text-[#4c4191] mb-3">Curaçao</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <MapPinIcon className="h-4 w-4 mt-0.5 mr-2 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Scharlooweg 123<br />
                    Willemstad, Curaçao
                  </span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-300">+599 9 123 4567</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-300">curacao@greatjobs.cw</span>
                </div>
              </div>
            </div>

            {/* Netherlands Office */}
            <div className="mb-6">
              <h4 className="font-medium text-[#4c4191] mb-3">Nederland</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start">
                  <MapPinIcon className="h-4 w-4 mt-0.5 mr-2 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-300">
                    Lange Voorhout 123<br />
                    2514 EA Den Haag
                  </span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-300">+31 70 123 4567</span>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-gray-300">nederland@greatjobs.nl</span>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div>
              <h4 className="font-medium text-[#4c4191] mb-3">Openingstijden</h4>
              <div className="space-y-1 text-sm text-gray-300">
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-2 text-gray-400" />
                  <span>Ma-Vr: 08:00 - 17:00</span>
                </div>
                <div className="ml-6">
                  <span>Za: 09:00 - 13:00</span>
                </div>
                <div className="ml-6">
                  <span>Zo: Gesloten</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} GreatJobs. Alle rechten voorbehouden. KVK: 12345678
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacybeleid
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Algemene Voorwaarden
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/59991234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-200 transform hover:scale-110 z-50"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </footer>
  );
}