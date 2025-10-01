const testimonialsData = [
  {
    quote:
      'I jumped from a Band 6.0 to a 7.5 in just 4 weeks! The AI Writing feedback was incredibly helpful and precise.',
    name: 'Aisha K.',
    band: 'Band 7.5',
  },
  {
    quote:
      'The unlimited mock tests gave me the confidence I needed. The interface is exactly like the real computer-delivered test.',
    name: 'David R.',
    band: 'Band 8.0',
  },
  {
    quote:
      'My speaking score improved significantly after just a few 1-on-1 sessions. Highly recommend this institute.',
    name: 'Chen W.',
    band: 'Band 7.0',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center sm:text-4xl">
          Don't just take our word for it.
        </h2>
        <p className="mt-4 text-xl text-gray-500 text-center">
          Hear from our successful students.
        </p>
        
        <div className="mt-12 space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-lg shadow-inner">
              {/* Quote Icon - Placeholder */}
              <svg className="h-8 w-8 text-indigo-600 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.261.474-4.032 1.257-5.143 2.571-.971 1.144-1.428 2.593-1.428 4.204v2.71h5v2.71H13V14.725zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.261.474-4.032 1.257-5.143 2.571-.971 1.144-1.428 2.593-1.428 4.204v2.71h5v2.71H0V14.725z"/>
              </svg>

              <blockquote className="text-gray-600 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-4 pt-4 border-t border-indigo-200">
                <p className="text-base font-semibold text-indigo-700">{testimonial.name}</p>
                <p className="text-sm text-gray-500 font-medium">{testimonial.band}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;