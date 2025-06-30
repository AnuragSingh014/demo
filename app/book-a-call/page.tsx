import CalWidget from "@/components/CalWidget";
import FAQsTwo from "@/components/faqs-2";
import FooterSection from "@/components/footer";
import WallOfLoveSection from "@/components/testimonials";

// Hero Section Component
const BookCallHero = () => (
  <section className="relative bg-white dark:bg-[oklch(0.147_0.004_49.25)]  py-5 lg:py-8">
    <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
    
    <div className="relative max-w-6xl mx-auto px-4 md:px-6 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
        </svg>
        Let's talk
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
        Ready to get started?
        <span className="block text-emerald-500">Book a call with us</span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
        Schedule a personalized demo and discover how we can help transform your business. 
        Our experts are ready to answer your questions and guide you to success.
      </p>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="flex flex-col items-center p-4">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">30-minute session</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Quick and focused discussion</p>
        </div>
        
        <div className="flex flex-col items-center p-4">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">No commitment</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Free consultation, no strings attached</p>
        </div>
        
        <div className="flex flex-col items-center p-4">
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-lg flex items-center justify-center mb-3">
            <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white mb-1">Instant value</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 text-center">Walk away with actionable insights</p>
        </div>
      </div>
    </div>
  </section>
);

// Pre-footer CTA Section
const PreFooterCTA = () => (
  <section className="bg-white dark:bg-[oklch(0.147_0.004_49.25)] py-8 lg:py-12">
    <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Can't find a suitable time?
      </h2>
      <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
        No worries! Send us a message and we'll get back to you within 24 hours. 
        We're here to help and find a time that works for you.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="mailto:hello@yourcompany.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          Send us an email
        </a>
        
        <div className="flex items-center gap-4 text-slate-300">
          <span className="text-sm">or call us at</span>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 px-4 py-2 border border-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
            </svg>
            +1 (234) 567-890
          </a>
        </div>
      </div>
      
      {/* Trust indicators */}
      <div className="mt-12 pt-8">
        <p className="text-sm text-slate-400 mb-4">Trusted by 500+ companies worldwide</p>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {/* Add your company logos here */}
          <div className="text-slate-500 text-sm font-medium">Company 1</div>
          <div className="text-slate-500 text-sm font-medium">Company 2</div>
          <div className="text-slate-500 text-sm font-medium">Company 3</div>
          <div className="text-slate-500 text-sm font-medium">Company 4</div>
        </div>
      </div>
    </div>
  </section>
);

export default function BookAcall() {
  return (
    <>
      <BookCallHero />
      <CalWidget />
      <PreFooterCTA />
      {/* <WallOfLoveSection/> */}
      {/* <FAQsTwo/> */}
      <FooterSection />
    </>
  );
}
