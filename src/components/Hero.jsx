const Hero = () => {
  return (
    <div className="relative bg-white"> 
      <div className="mx-auto"> 
        <div className="relative z-10 bg-white lg:pb-0">
          
          <div className="lg:grid lg:grid-cols-12">
            
            {/* 1. Text Content (Left Side) - Takes 6 columns on large screen */}
            <div className="lg:col-span-6 xl:col-span-6 pt-10 pb-8 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-32 xl:pt-32 xl:pb-40 px-4 sm:px-6 lg:px-8">
              <div className="sm:text-center lg:text-left lg:max-w-xl">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Master Your IELTS</span>{' '}
                  <span className="block text-indigo-600 xl:inline">with Confidence</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Achieve your target band score with personalized study plans,
                  unlimited mock tests, and AI-powered band score prediction.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Enroll Now
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Watch Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Image/Banner Section (Right Side) - Takes 6 columns and fills space */}
            <div className="lg:col-span-6 xl:col-span-6">
                {/* Actual Image using the provided URL */}
                <img
                  className="h-96 w-full object-cover lg:h-full"
                  src="https://img.freepik.com/premium-photo/foreign-school-private-study-smile-laught-with-school-girl-teacher-explain-grammar-native-language-using-laptop_255847-1870.jpg?semt=ais_hybrid&w=740" 
                  alt="IELTS student smiling with teacher and laptop"
                  loading="lazy"
                />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;