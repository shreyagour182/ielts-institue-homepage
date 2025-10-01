import FeatureCard from './FeatureCard';

const featuresData = [
  {
    title: 'AI Band Score Prediction',
    description:
      'Get instant, accurate band scores and detailed feedback on your writing and speaking tasks using advanced AI.',
    // Example SVG path for a "lightbulb" idea icon
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  },
  {
    title: 'Unlimited Mock Tests',
    description:
      'Practice with full-length, timed mock tests that replicate the real IELTS exam environment for all four modules.',
    // Example SVG path for a "clipboard" list icon
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  },
  {
    title: '1-on-1 Speaking Practice',
    description:
      'Connect with certified IELTS examiners for live, personalized speaking sessions and detailed feedback.',
    // Example SVG path for a "user chat" icon
    icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 4v-4z',
  },
  {
    title: 'Reading & Listening Engine',
    description:
      'Access thousands of practice questions with instant scoring and explanations to build comprehension.',
    // Example SVG path for a "book" icon
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253',
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Why Choose Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The Smartest Way to Prepare for IELTS
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-8 md:gap-y-10">
            {featuresData.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;