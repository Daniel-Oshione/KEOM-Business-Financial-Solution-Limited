import { Link } from 'react-router-dom';
import CustomButton from '../Components/Button';

export default function AboutUs() {
  const coreValues = [
    {
      title: "Professionalism & Integrity",
      desc: "We maintain the highest standards of ethics, transparency, and confidentiality in every client engagement."
    },
    {
      title: "Client-Focused Approach",
      desc: "Your success is our business. We tailor our advisory frameworks to align precisely with your organizational goals."
    },
    {
      title: "Strategic Partnership",
      desc: "We look beyond short-term fixes, building long-term alliances that support sustainable growth and market leadership."
    },
    {
      title: "Innovation & Excellence",
      desc: "We leverage cutting-edge market insights and multidisciplinary expertise to solve complex business challenges."
    }
  ];

  const sectors = [
    "Financial Services", "Manufacturing", "Oil & Gas", "Agriculture", 
    "Healthcare", "Hospitality", "Education", "Transportation & Logistics", 
    "Real Estate", "Retail & FMCG", "Technology", "Professional Services"
  ];

  return (
    <div className="space-y-16 py-12 font-sans text-gray-800">
      
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Driving Enterprise Success Through <span className="text-sky-600">Strategic Vision</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          KEOM Business & Financial Solutions Limited is a premier business consultancy and financial advisory firm committed to unlocking sustainable growth for organizations across Africa.
        </p>
      </section>

      {/* Who We Are & Our Story */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Who We Are</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            With over 15 years of combined industry experience, KEOM provides robust, high-impact advisory services to businesses navigating complex economic landscapes. Our multidisciplinary team spans financial management, transaction advisory, corporate strategy, human capital optimization and executive education.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            From fueling the incubation, establishment, and funding readiness of Micro, Small and Medium Enterprises (MSMEs) to partnering with established corporations to overhaul operational efficiency, we deliver practical frameworks designed for long-term impact.
          </p>
        </div>
        
        <div className="bg-sky-50 p-8 md:p-10 rounded-3xl border border-sky-100 space-y-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900">Our Core Philosophy</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-sky-500 pl-4">
              <h4 className="font-semibold text-gray-900 text-sm">Core Business Focus</h4>
              <p className="text-xs text-gray-600 mt-1">We empower clients to focus entirely on their core commercial strengths while we handle the critical strategic architecture.</p>
            </div>
            <div className="border-l-4 border-sky-500 pl-4">
              <h4 className="font-semibold text-gray-900 text-sm">Measurable Execution</h4>
              <p className="text-xs text-gray-600 mt-1">Every strategy we deploy is anchored on measurable outcomes, performance optimization and value creation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-gradient-to-b from-sky-50/50 to-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-sky-100 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full">Our Mission</span>
            <h3 className="text-2xl font-bold text-gray-900">Empowering Sustainable Growth</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              To empower businesses with innovative business, financial and human capital solutions that drive sustainable growth, operational excellence and long-term value.
            </p>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-sky-100 shadow-xs space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full">Our Vision</span>
            <h3 className="text-2xl font-bold text-gray-900">The Preferred African Partner</h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              To be the preferred business consultancy and financial advisory firm, recognized for delivering exceptional value, trusted partnerships and transformative business solutions across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Core Values</h2>
          <p className="text-gray-600 text-sm">The principles that govern our professional conduct and client engagements.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-sky-100 shadow-2xs space-y-2">
              <h4 className="font-bold text-2xl text-gray-900 text-base text-sky-600">{val.title}</h4>
              <p className="text-gray-600 text-xsl leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Sector Experience Preview */}
      <section className="bg-sky-50/40 py-12 px-6 rounded-3xl max-w-6xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Cross-Sector Expertise</h2>
          <p className="text-gray-600 text-sm">Providing specialized advisory across multiple complex economic industries.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-2.5">
          {sectors.map((sector, idx) => (
            <span key={idx} className="bg-white border border-sky-200 text-gray-700 px-4 py-2 rounded-xl text-xs font-medium shadow-2xs">
              {sector}
            </span>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center pt-4">
        <div className="max-w-3xl mx-auto bg-sky-500 rounded-3xl p-10 text-white space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">Ready to Transform Your Business?</h2>
          <p className="text-sky-100 text-sm max-w-lg mx-auto">
            Collaborate with our seasoned consultants to build an efficient, scalable and highly profitable enterprise.
          </p>
          <div className="pt-2">
            <CustomButton as={Link} to="/contact" className="!bg-white !text-sky-600 hover:!bg-sky-50 !font-semibold !px-8 !py-3">
              Engage Our Team
            </CustomButton>
          </div>
        </div>
      </section>

    </div>
  );
}