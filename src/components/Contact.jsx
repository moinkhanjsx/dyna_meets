import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-8 bg-gradient-to-br from-[#FD00B6] to-[#FF95DC] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Side - All Text Things */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="font-lalezar text-6xl md:text-7xl mb-8">Contact</h2>
            <p className="font-inter text-lg md:text-xl mb-12 max-w-2xl">
              Ready to bring the energy to your event? Let's create unforgettable moments together.
            </p>
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-inter font-semibold text-lg">Email</h3>
                <p className="font-inter text-white/80">enquiry@dynameets.in</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-inter font-semibold text-lg">Phone</h3>
                <p className="font-inter text-white/80">8928295092 / 8850610219</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <img src="/icons/insta icon.png" alt="Instagram" className="w-12 h-12" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <img src="/icons/youtube icon.png" alt="YouTube" className="w-12 h-12" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <img src="/icons/drive icon.png" alt="Google Drive" className="w-12 h-12" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
                  <img src="/icons/sound cloud icon.png" alt="SoundCloud" className="w-12 h-12" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-auto h-[90vh]">
              <img
                src="/last/last.png"
                alt="Contact Image"
                className="w-full h-full object-contain rounded-2xl "
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;