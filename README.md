# ielts-institue-homepage
 IELTS Institute Homepage Assignment
This project is a modern, fully responsive homepage for a fictional IELTS preparation institute. It was developed as a submission for an internship assignment.
The application is built using React JS and styled entirely with Tailwind CSS.

Project Structure and Setup :-

Technologies Used
Frontend Framework: React JS (Vite)
Styling: Tailwind CSS (Utility-First Framework)
Language: JavaScript (ES6+)

Local Setup Instructions :-
To get a copy of the project up and running on your local machine, follow these simple steps:

Clone the Repository:-
git clone https://github.com/shreyagour182/ielts-institue-homepage.git
cd ielts-institue-homepage

Install Dependencies:-
npm install

Start the Development Server:-
npm run dev

Design and Technical Choices:-
1. Modern and Professional Design
Color Palette: We used a clean, educational palette featuring Indigo (600/700) as the primary accent color. This conveys trust, reliability, and professionalism.
Typography: Clear, highly readable sans-serif fonts are used throughout to ensure a smooth user experience.
Sections: The page follows a standard, conversion-focused structure: Navbar, strong Hero with CTA, clear Feature cards, social proof (Testimonials), and a Footer.

2. Focus on Responsiveness (Mobile-First)
The entire layout adheres to a Mobile-First design approach, meaning it looks great on small screens by default.
Tailwind Breakpoints (sm:, lg:) are used strategically to handle layout shifts:
Hero Section: Switches from a vertical stack (phone) to a balanced 50/50 split grid (desktop).
Feature & Testimonial Cards: These transition from a single-column stack on mobile to multi-column grids (up to 4 columns) on larger screens.

3. Clean Code and Componentization
The UI is divided into modular, reusable React components (e.g., <Navbar>, <FeatureCard>, <TestimonialCard>) to maintain code clarity and scalability, focusing on declarative UI logic.
