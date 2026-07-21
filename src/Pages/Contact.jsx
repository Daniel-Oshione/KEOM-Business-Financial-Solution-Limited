import { useState } from "react";
import emailjs from "@emailjs/browser";
import CustomButton from "../Components/Button";
import linkedin from "../assets/linkedin.png";
import Instagram from "../assets/instagram.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Email form submit api call
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus("Message sent successfully! We will get back to you.");
        setFormData({ name: "", email: "", message: "" });
        
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setStatus("Failed to send message. Please try again later.");
      });
  };

  return (
    <div className="space-y-12 py-12 font-sans text-gray-800 max-w-5xl mx-auto px-4">
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Ready to accelerate your business growth? Reach out to KEOM Business &
          Financial Solutions Limited today.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Information Card */}
        <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100 space-y-6">
          <h3 className="text-xl font-bold text-gray-900">
            Office Headquarters
          </h3>

          <div className="space-y-2 text-sm text-gray-700">
            <p className="font-semibold text-gray-900">
              KEOM Business & Financial Solutions Limited
            </p>
            <p>POATSON House, 3rd Floor,</p>
            <p>142 Oba Akran Avenue,</p>
            <p>Ikeja, Lagos, Nigeria.</p>
          </div>

          <div className="space-y-2 text-sm text-gray-700 pt-2 border-t border-sky-200">
            <p>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              info@keomlimited.com
            </p>
          </div>

          <div className="pt-4 space-y-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Connect Online
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/keom-business-and-financial-solutions-limited/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer"
              >
                <img src={linkedin} alt="KEOM linkedin logo" className="h-10" />
              </a>
              <a
                href="https://www.instagram.com/keomlimited?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:cursor-pointer"
              >
                <img
                  src={Instagram}
                  alt="KEOM Instagram logo"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-xs space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-sky-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-sky-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we assist your business?"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-sky-500 text-sm"
              ></textarea>
            </div>
            <CustomButton
              type="submit"
              className="w-full !bg-sky-500 hover:!bg-sky-600 !text-white !py-3 !font-semibold !ring-0 focus:!ring-0 !transition-colors !duration-300"
            >
              Send Message
            </CustomButton>

            {status && (
              <p className="text-xs text-center font-medium text-sky-600 pt-2">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
