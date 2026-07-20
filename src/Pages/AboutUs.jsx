import { Link } from 'react-router-dom';
import CustomButton from '../Components/Button';

export default function AboutUS() {
  return (
    <div className="space-y-16 py-12 font-sans text-gray-800">
      
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About KEOM</h1>
        <p className="text-gray-600 text-base md:text-lg">
          Leading business consultancy and financial advisory firm committed to helping organizations achieve sustainable growth.
        </p>
      </section>

      {/* Who We Are Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Driving Excellence Through Strategic Insight</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            With over 15 years of combined industry experience, KEOM Business & Financial Solutions Limited provides strategic advisory services to businesses across diverse sectors. Our expertise spans business advisory, transaction advisory, financial management, human capital management, and corporate training.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            We have successfully supported the incubation, establishment, growth, and funding readiness of numerous MSMEs, while partnering with major enterprises to boost operational efficiency and performance.
          </p>
        </div>
        <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100 space-y-6">
          <div className="border-l-4 border-sky-500 pl-4">
            <h4 className="font-semibold text-gray-900">Our Core Focus</h4>
            <p className="text-xs text-gray-600 mt-1">Enabling clients to focus on their core operations while we provide the high-level framework needed for long-term success.</p>
          </div>
          <div className="border-l-4 border-sky-500 pl-4">
            <h4 className="font-semibold text-gray-900">Client-Centric Mindset</h4>
            <p className="text-xs text-gray-600 mt-1">Deep commitment to professionalism, integrity, and reliable value-driven execution.</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-xs space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full">Our Mission</span>
          <h3 className="text-xl font-bold text-gray-900">Empowering Sustainable Performance</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To empower businesses with innovative business, financial, and human capital solutions that drive sustainable growth, operational excellence, and long-term value.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-xs space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full">Our Vision</span>
          <h3 className="text-xl font-bold text-gray-900">The Preferred African Advisory Firm</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            To be the preferred business consultancy and financial advisory firm, recognized for delivering exceptional value, trusted partnerships, and transformative business solutions across Africa.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center pt-6">
        <CustomButton as={Link} to="/contact" className="!bg-sky-500 hover:!bg-sky-600 !text-white !px-8 !py-3">
          Partner With Us
        </CustomButton>
      </section>

    </div>
  );
}