import { Link } from 'react-router-dom';
import CustomButton from '../Components/Button';

export default function Services() {
  const serviceCategories = [
    {
      title: "Business Advisory",
      desc: "Develop effective strategies that improve performance, competitiveness, and enterprise transformation.",
      items: [
        "Business Strategy Development", "Business Planning", "Enterprise Transformation", 
        "Business Intelligence and Research", "Corporate Performance Management", 
        "Retreat Facilitation", "Business Diagnostics"
      ]
    },
    {
      title: "Financial & Transaction Advisory",
      desc: "Provide critical financial expertise supporting informed decision-making and investment readiness.",
      items: [
        "Corporate Finance Advisory", "Project Finance", "Financial Planning & Management", 
        "Financial Modelling & Projections", "Profit Improvement", "Enterprise Risk Management", 
        "Joint Venture Advisory", "Feasibility Studies", "Investment Readiness Support"
      ]
    },
    {
      title: "Human Capital Advisory",
      desc: "Build, develop, and retain high-performing workforces through strategic talent solutions.",
      items: [
        "Recruitment & Talent Acquisition", "Executive Search", "HR Advisory & Strategy", 
        "Workforce Planning", "Performance Management", "HR Transformation & Audit", 
        "Organizational Design", "Executive Coaching", "Psychometric Assessments"
      ]
    },
    {
      title: "Learning & Development",
      desc: "Enhance employee capability, leadership effectiveness, and corporate performance.",
      items: [
        "Leadership Development", "Customer Service Excellence", "Sales & Business Development", 
        "Team Building", "Supervisory & Management Skills", "Soft Skills Training", 
        "Corporate Finance for Non-Finance", "Strategic Planning Workshops"
      ]
    },
    {
      title: "Outsourcing & Workforce Management",
      desc: "End-to-end workforce solutions that allow you to focus completely on your core business.",
      items: [
        "Staff Outsourcing", "Contract Staffing", "Payroll Administration", 
        "Compliance Management", "Workforce Administration", "Employee Lifecycle Management"
      ]
    }
  ];

  return (
    <div className="space-y-16 py-12 font-sans text-gray-800">
      
      {/* Header */}
      <section className="text-center max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h1>
        <p className="text-gray-600 text-base md:text-lg">
          Comprehensive, value-driven solutions designed to empower organizations to thrive in changing environments.
        </p>
      </section>

      {/* Services List Grid */}
      <section className="space-y-12 px-4 max-w-5xl mx-auto">
        {serviceCategories.map((cat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-3xl border border-sky-100 shadow-2xs hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-sky-600 mb-2">{cat.title}</h3>
            <p className="text-gray-600 text-sm mb-6">{cat.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {cat.items.map((item, itemIdx) => (
                <div key={itemIdx} className="bg-sky-50/50 border border-sky-100 text-gray-700 px-4 py-2.5 rounded-xl text-xs font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Bottom CTA */}
      <section className="bg-sky-500 rounded-3xl p-10 text-center text-white max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-bold">Need a Custom Advisory Solution?</h2>
        <p className="text-sky-100 text-sm max-w-lg mx-auto">
          Speak with our multidisciplinary consultants today to discuss how we can tailor our services to your specific business requirements.
        </p>
        <div className="pt-2">
          <CustomButton as={Link} to="/contact" className="!bg-white !text-sky-600 hover:!bg-sky-50 !font-semibold !px-8 !py-3">
            Contact an Advisor
          </CustomButton>
        </div>
      </section>

    </div>
  );
}