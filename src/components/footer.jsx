import { Link } from 'react-router-dom';
import logo from '../assets/KEOMLOGO.webp';
import linkedin from '../assets/linkedin.png'
import Instagram from '../assets/instagram.png'

export default function Footer() {
  return (
    <footer className="bg-sky-50 border-t border-sky-100 text-gray-700 font-sans mt-20">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand info */}
          <div className="space-y-4 md:col-span-1">
            <img src={logo} alt="KEOM Logo" className="h-10 rounded-lg" />
            <p className="text-xs text-gray-600 leading-relaxed">
              Empowering businesses with innovative business, financial, and human capital solutions.
            </p>
                        <div className="flex gap-3 text-xs pt-2">
              <a href="https://www.linkedin.com/company/keom-business-and-financial-solutions-limited/" target="_blank" rel="noreferrer" className="text-sky-600 hover:underline"><img src={linkedin} alt="KEOM linkedin logo" className="h-10" /></a>
              <a href="https://www.instagram.com/keomlimited?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" className="text-sky-600 hover:underline"><img src={Instagram} alt="KEOM linkedin logo" className="h-10" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-sky-600">Home</Link></li>
              <li><Link to="/about" className="hover:text-sky-600">About Us</Link></li>
              <li><Link to="/services" className="hover:text-sky-600">Services</Link></li>
              <li><Link to="/contact" className="hover:text-sky-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 text-sm">Office</h4>
            <p className="text-xs text-gray-600">
              POATSON House, 3rd Floor,<br />
              142 Oba Akran Avenue,<br />
              Ikeja, Lagos, Nigeria.
            </p>
          </div>

          {/* Legal / Socials */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 text-sm">Connect</h4>
            <p className="text-xs text-gray-600">Email: info@keomlimited.com</p>
          </div>

        </div>

        <div className="border-t border-sky-200/60 pt-6 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} KEOM Business & Financial Solutions Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}