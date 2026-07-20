import CustomButton from '../Components/Button';

export default function Contact() {
  return (
    <div className="space-y-12 py-12 font-sans text-gray-800 max-w-5xl mx-auto px-4">
      
      {/* Header */}
      <section className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Get in Touch</h1>
        <p className="text-gray-600 text-sm md:text-base">
          Ready to accelerate your business growth? Reach out to KEOM Business & Financial Solutions Limited today.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Contact Information Card */}
        <div className="bg-sky-50 p-8 rounded-3xl border border-sky-100 space-y-6">
          <h3 className="text-xl font-bold text-gray-900">Office Headquarters</h3>
          
          <div className="space-y-2 text-sm text-gray-700">
            <p className="font-semibold text-gray-900">KEOM Business & Financial Solutions Limited</p>
            <p>POATSON House, 3rd Floor,</p>
            <p>142 Oba Akran Avenue,</p>
            <p>Ikeja, Lagos, Nigeria.</p>
          </div>

          <div className="space-y-2 text-sm text-gray-700 pt-2 border-t border-sky-200">
            <p><span className="font-semibold text-gray-900">Email:</span> info@keomlimited.com</p>
          </div>

          <div className="pt-4 space-y-2">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Connect Online</p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/company/keom-business-and-financial-solutions-limited/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-600 hover:text-sky-700 font-medium text-sm underline"
              >
                LinkedIn Profile
              </a>
              <a 
                href="https://www.instagram.com/keomlimited?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sky-600 hover:text-sky-700 font-medium text-sm underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-3xl border border-sky-100 shadow-xs space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-sky-500 text-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Address</label>
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-sky-500 text-sm" 
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Message</label>
              <textarea 
                rows="4" 
                placeholder="How can we assist your business?" 
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-hidden focus:border-sky-500 text-sm"
              ></textarea>
            </div>
            <CustomButton className="w-full !bg-sky-500 hover:!bg-sky-600 !text-white !py-3 !font-semibold">
              Send Message
            </CustomButton>
          </form>
        </div>

      </section>

    </div>
  );
}