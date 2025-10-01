// You will need to install a package for icons, e.g., react-icons: npm install react-icons
// For now, we'll use a simple SVG placeholder.

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
        {/* Replace with an actual icon from react-icons */}
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={icon}
          />
        </svg>
      </div>
      <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard;