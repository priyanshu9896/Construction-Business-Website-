import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Raj Enterprises</h3>
            <p className="text-gray-400">
              Your trusted partner in construction and specialized contracting services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/portfolio" className="text-gray-400 hover:text-white transition-colors">Past Work</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                9896456515
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                rajenterprises.firm1972@gmail.com
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Palwal, Haryana
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Raj Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;