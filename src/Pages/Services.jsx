import { Link } from 'react-router-dom';
import CustomButton from '../components/Button';
import { Helmet } from 'react-helmet-async';

export default function Services() {
  const serviceDivisions = [
    {
      number: "01",
      title: "Business Advisory",
      tagline: "Unlocking operational excellence and strategic scalability.",
      description: "We help organizations develop rigorous corporate strategies that drastically improve performance, market competitiveness and long-term viability. Our diagnostic frameworks turn complex challenges into structured roadmaps for growth.",
      offerings: [
        "Business Strategy Development", 
        "Comprehensive Business Planning", 
        "Enterprise Transformation", 
        "Business Intelligence & Market Research", 
        "Corporate Performance Management", 
        "Retreat Facilitation", 
        "Enterprise Business Diagnostics"
      ]
    },
    {
      number: "02",
      title: "Financial & Transaction Advisory",
      tagline: "Securing capital, funding readiness, and fiscal optimization.",
      description: "We provide authoritative financial expertise that anchors confident decision-making, investor readiness and secure business expansion across diverse corporate landscapes.",
      offerings: [
        "Corporate Finance Advisory", 
        "Project Finance Structuring", 
        "Strategic Financial Planning & Management", 
        "Financial Modelling & Projections", 
        "Profit Improvement Initiatives", 
        "Enterprise Risk Management", 
        "Joint Venture Advisory", 
        "Feasibility Studies & Market Validation", 
        "Investment Readiness Support"
      ]
    },
    {
      number: "03",
      title: "Human Capital Advisory",
      tagline: "Building, structuring, and retaining high-performing workforces.",
      description: "People are an organization's greatest asset. We engineer strategic human resource solutions that optimize talent deployment, structural design and executive leadership pipelines.",
      offerings: [
        "Recruitment & Talent Acquisition", 
        "Executive Search", 
        "Comprehensive HR Advisory", 
        "Strategic Workforce Planning", 
        "Performance Management Frameworks", 
        "HR Strategy & Transformation", 
        "HR Audits & Organizational Design", 
        "Executive Coaching & Mentoring", 
        "Psychometric Assessments"
      ]
    },
    {
      number: "04",
      title: "Learning & Development",
      tagline: "Elevating leadership capacity and corporate capability.",
      description: "Our bespoke learning solutions are carefully designed to sharpen employee capabilities, foster leadership effectiveness and drive organization-wide performance standards.",
      offerings: [
        "Leadership Development Programs", 
        "Customer Service Excellence", 
        "Sales & Business Development Training", 
        "Performance Improvement Workshops", 
        "Corporate Team Building", 
        "Supervisory & Management Skills", 
        "Soft Skills & Professional Etiquette", 
        "Corporate Finance for Non-Finance Executives", 
        "Strategic Planning Masterclasses"
      ]
    },
    {
      number: "05",
      title: "Outsourcing & Workforce Management",
      tagline: "Streamlining operations through trusted people administration.",
      description: "We deliver comprehensive, end-to-end workforce solutions that liberate organizations to focus entirely on their core commercial goals while we expertly manage people operations.",
      offerings: [
        "Staff Outsourcing Solutions", 
        "Contract Staffing Services", 
        "Precision Payroll Administration", 
        "Regulatory & Compliance Management", 
        "Workforce Administration", 
        "Employee Lifecycle Management"
      ]
    }
  ];

  return (
    <div className="space-y-20 py-12 font-sans text-gray-800 selection:bg-sky-100 selection:text-sky-700">
      <Helmet>
        <title>Our Services | KEOM Business & Financial Solutions</title>
        <meta name="description" content="Explore KEOM's comprehensive advisory services, including business strategy, financial advisory, human capital solutions, and learning & development programs." />
      </Helmet>
      {/* Page Header */}
      <section className="text-center max-w-3xl mx-auto px-4 space-y-4">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          Comprehensive <span className="text-sky-600">Advisory Solutions</span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          Driven by over 15 years of combined multidisciplinary expertise, we provide high-impact, value-driven frameworks designed to help organizations thrive in dynamic environments.
        </p>
      </section>

      {/* Main Services Editorial Layout */}
      <section className="max-w-6xl mx-auto px-4 space-y-16">
        {serviceDivisions.map((service, idx) => (
          <div 
            key={idx} 
            className={`bg-white rounded-3xl border border-sky-100 p-8 md:p-12 shadow-2xs hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
              idx % 2 === 1 ? 'lg:bg-sky-50/30' : ''
            }`}
          >
            {/* Left Column: Number & Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="w-12 h-12 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 font-extrabold text-base shadow-2xs">
                {service.number}
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
                {service.title}
              </h2>
              <p className="text-sky-600 font-medium text-sm">
                {service.tagline}
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
              <div className="pt-2">
                <CustomButton as={Link} to="/contact" className="!bg-sky-500 hover:!bg-sky-600 !text-white !text-xs !font-semibold !px-5 !py-2.5">
                  Engage This Service
                </CustomButton>
              </div>
            </div>

            {/* Right Column: Structured Capabilities Grid */}
            <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-sky-100/80 shadow-2xs space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-3">
                Core Capabilities & Offerings
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.offerings.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="bg-sky-50/50 border border-sky-100/60 text-gray-700 px-4 py-3 rounded-xl text-xs md:text-sm font-medium flex items-start gap-2.5 transition-colors hover:border-sky-300"
                  >
                    <span className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-1.5 shrink-0"></span>
                    <span className="leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Strategic Engagement Section */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-sky-500 rounded-3xl p-10 md:p-14 text-center text-white space-y-6 shadow-md relative overflow-hidden">
          <div className="absolute right-0 top-0 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl pointer-events-none"></div>
          <span className="text-xs font-bold uppercase tracking-wider bg-white/10 px-3.5 py-1 rounded-full inline-block">
            Tailored Consulting
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
            Need a Customized Advisory Framework?
          </h2>
          <p className="max-w-xl mx-auto text-sky-100 text-sm md:text-base leading-relaxed">
            Every organization possesses a unique corporate ecosystem. Speak with our multidisciplinary consultants to build an integrated strategy customized precisely to your business requirements.
          </p>
          <div className="pt-2">
            <CustomButton as={Link} to="/contact" className="!bg-white !text-sky-600 hover:!bg-sky-50 !font-bold !px-8 !py-3.5 shadow-sm !transition-colors !duration-300">
              Schedule an Advisor Consultation
            </CustomButton>
          </div>
        </div>
      </section>

    </div>
  );
}