import { Link } from "react-router-dom";
import CustomButton from "../Components/Button";
import heroBg from "../assets/herobg.webp";

export default function HomePage() {
  const highlights = [
    {
      num: "15+",
      title: "Years of Combined Experience",
      desc: "Multidisciplinary consultants providing strategic financial and operational insights across diverse sectors.",
    },
    {
      num: "100%",
      title: "Tailored & Practical Solutions",
      desc: "Value-driven frameworks engineered specifically around your corporate goals, risk profile, and market realities.",
    },
    {
      num: "360°",
      title: "End-to-End Advisory Support",
      desc: "From initial incubation and MSME funding readiness to full enterprise transformation and workforce management.",
    },
  ];

  const coreServicesPreview = [
    {
      title: "Business Advisory",
      desc: "Optimize performance, competitiveness, and enterprise strategy through deep diagnostic research.",
      link: "/services",
    },
    {
      title: "Financial & Transaction Advisory",
      desc: "Secure funding readiness, corporate finance advisory, and robust financial modeling.",
      link: "/services",
    },
    {
      title: "Human Capital Management",
      desc: "Build and retain elite workforces via executive search, HR transformation, and structural audits.",
      link: "/services",
    },
    {
      title: "Learning & Development",
      desc: "Elevate leadership effectiveness, customer service excellence, and team capabilities.",
      link: "/services",
    },
  ];

  return (
    <div className="space-y-20 pb-16 font-sans text-gray-800 selection:bg-sky-100 selection:text-sky-700">
      {/* Hero Section */}
      <section
        className="relative text-center py-24 md:py-36 px-6 overflow-hidden bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-sky-950/80 mix-blend-multiply pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Empowering Organizations for{" "}
            <span className="text-sky-400">Sustainable Growth</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-sky-100/90 leading-relaxed">
            KEOM Business & Financial Solutions Limited delivers innovative
            advisory, financial, and human capital solutions designed to scale
            your operations and unlock long-term value.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <CustomButton
              as={Link}
              to="/services"
              className="!bg-sky-500 hover:!bg-sky-600 !text-white !font-semibold !px-8 !py-3.5 shadow-sm !transition-colors !duration-300"
            >
              Explore Our Services
            </CustomButton>
            <CustomButton
              as={Link}
              to="/contact"
              className="!bg-transparent !text-white hover:!bg-white hover:!text-sky-400 !border !border-sky-400 !font-semibold !px-8 !py-3.5 !transition-colors !duration-300"
            >
              Schedule a Consultation
            </CustomButton>
          </div>
        </div>
      </section>

      {/* Trust & Authority Highlights */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-3xl border border-sky-100 shadow-2xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 space-y-3"
          >
            <div className="w-14 h-14 bg-sky-100/80 rounded-2xl flex items-center justify-center text-sky-600 font-bold text-xl">
              {item.num}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* About Snapshot Section */}
      <section className="max-w-6xl mx-auto px-4 bg-sky-50/40 rounded-3xl p-8 md:p-14 border border-sky-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-white px-3 py-1 rounded-full border border-sky-200">
              Trusted Corporate Partner
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
              Strategic Support Built for Modern Enterprises and MSMEs
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We partner with businesses across diverse sectors to navigate
              complex market conditions. Whether you are scaling an early-stage
              enterprise for investor readiness or restructuring an established
              organization for maximum operational efficiency, our
              multidisciplinary team provides the framework you need.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="text-sky-600 font-semibold text-sm hover:text-sky-700 inline-flex items-center gap-2 group"
              >
                Learn more about our core philosophy
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-sky-200 shadow-xs space-y-4">
            <h4 className="font-bold text-gray-900 text-base">
              Our Commitment
            </h4>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
              "At KEOM, we are passionate about creating practical, sustainable
              solutions that enable our clients to focus entirely on their core
              business while we provide the strategic engine for long-term
              success."
            </p>
            <div className="pt-2 border-t border-sky-100 text-xs font-semibold text-sky-600">
              — KEOM Management Team
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Preview Section */}
      <section className="max-w-6xl mx-auto px-4 space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full mb-2 inline-block">
            What We Do
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Comprehensive Advisory Solutions
          </h2>
          <p className="text-gray-600 text-sm">
            Explore our specialized divisions crafted to drive operational
            excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServicesPreview.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-sky-100 shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4 hover:-translate-y-1"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-gray-900 text-base">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <Link
                to={service.link}
                className="text-xs font-semibold text-sky-600 hover:text-sky-700 pt-2 inline-block"
              >
                View capabilities →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <CustomButton
            as={Link}
            to="/services"
            className="!bg-sky-500 hover:!bg-sky-600 !text-white !px-8 !py-3 !ring-0 focus:!ring-0 !transition-colors !duration-300"
          >
            View All Services & Specializations
          </CustomButton>
        </div>
      </section>

      {/* High-Impact Conversion Banner */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-sky-500 rounded-3xl p-10 md:p-16 text-center text-white space-y-6 shadow-md relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-sky-400/30 rounded-full blur-2xl pointer-events-none"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Your Success is Our Business
          </h2>
          <p className="max-w-xl mx-auto text-sky-100 text-sm md:text-base leading-relaxed">
            Partner with KEOM today to streamline your operations, strengthen
            your financial architecture, and position your brand for sustainable
            growth.
          </p>
          <div className="pt-2">
            <CustomButton
              as={Link}
              to="/contact"
              className="!bg-white !text-sky-600 hover:!bg-sky-50 !font-bold !px-9 !py-4 shadow-sm !transition-colors !duration-300"
            >
              Get in Touch With Us
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  );
}
