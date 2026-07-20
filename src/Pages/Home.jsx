import { Link } from 'react-router-dom';
import CustomButton from '../Components/Button';

export default function HomePage() {
  const industries = [
    "Financial Services", "Manufacturing", "Oil & Gas", "Agriculture", 
    "Healthcare", "Hospitality", "Education", "Transportation & Logistics", 
    "Real Estate", "Retail & FMCG", "Technology", "Professional Services"
  ];

  return (
    <div className="space-y-16 pb-12 pl-10 pr-10 font-sans text-gray-800">
      
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24 bg-gradient-to-b from-sky-50 to-white rounded-3xl px-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
          Empowering Businesses for <span className="text-sky-600">Sustainable Growth</span>
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600 mb-8">
          KEOM Business & Financial Solutions Limited delivers innovative advisory, financial, and human capital solutions backed by over 15 years of combined industry expertise.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <CustomButton as={Link} to="/services" className="!bg-sky-500 hover:!bg-sky-600 !text-white !font-medium !px-6 !py-3 !ring-0 focus:!ring-0 !transition-colors !duration-300">
            Explore Our Services
          </CustomButton>
          <CustomButton as={Link} to="/contact" className="!bg-white !text-sky-600 hover:!bg-sky-50 !border !border-sky-500 !px-6 !py-3 !ring-0 focus:!ring-0 !transition-colors !duration-300">
            Contact Us Today
          </CustomButton>
        </div>
      </section>

      {/* Why Choose KEOM Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-sky-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 font-bold text-xl mb-4">15+</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Years of Experience</h3>
          <p className="text-gray-600 text-sm">Multidisciplinary consultants providing strategic insights across diverse corporate sectors.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-sky-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 font-bold text-xl mb-4">💡</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Tailored Solutions</h3>
          <p className="text-gray-600 text-sm">Practical, value-driven execution designed around your specific corporate goals and challenges.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-sky-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 font-bold text-xl mb-4">📈</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Measurable Results</h3>
          <p className="text-gray-600 text-sm">A long-term strategic partnership mindset focused on optimizing performance and boosting efficiency.</p>
        </div>
      </section>

      {/* Industries Ticker / Grid Section */}
      <section className="bg-sky-50/50 py-12 px-6 rounded-3xl">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Industries We Serve</h2>
          <p className="text-gray-600 text-sm">Delivering cross-sector transformation and financial advisory nationwide.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind, idx) => (
            <span key={idx} className="bg-white border border-sky-200 text-gray-700 px-4 py-2 rounded-full text-xs md:text-sm font-medium shadow-2xs">
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="bg-sky-500 rounded-t-2xl p-8 md:p-12 text-center text-white space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold">Your Success is Our Business</h2>
        <p className="max-w-xl mx-auto text-sky-100 text-sm md:text-base">
          Partner with KEOM today to unlock new operational efficiencies, secure funding readiness, and drive long-term value.
        </p>
        <div className="pt-2">
          <CustomButton as={Link} to="/contact" className="!bg-white !text-black hover:!bg-sky-100 !ring-0 focus:!ring-0 !transition-colors !duration-300">
            Get Started Now
          </CustomButton>
        </div>
      </section>

    </div>
  );
}