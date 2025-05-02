import Navbar from "./components/Navbar";
import heroImage from "/assets/images/kachi.jpg";
import { useTheme } from "./context/ThemeContext";
import Button from "./lib/Button";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`min-h-screen dark:bg-dark-bg transition-colors duration-200 ${
        theme === "light" ? "bg-white" : "bg-gray-600"
      }`}
    >
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main className="container mx-auto h-[calc(100vh-4rem)]">
        <section className="h-full flex items-center px-4 sm:px-6 lg:px-8 pt-16">
          <div className="w-full">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image */}
              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] group">
                <div className="h-full rounded-lg overflow-hidden shadow-xl 
                  animate-[slideIn_0.5s_ease-out] 
                  hover:scale-[1.02] transition-transform duration-300
                  relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300">
                  <img
                    src={heroImage}
                    alt="Profile"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-4 animate-[fadeIn_0.8s_ease-out]">
                <h2
                  className={`text-4xl font-bold ${
                    theme === "light" ? "text-gray-900" : "text-gray-100"
                  } mb-4 animate-[slideUp_0.5s_ease-out] hover:text-primary dark:hover:text-purple-400 transition-colors duration-300`}
                >
                  Hi, I'm
                </h2>
                <h1
                  className={`text-5xl font-bold ${
                    theme === "light" ? "text-gray-900" : "text-gray-100"
                  } mb-6 animate-[slideUp_0.5s_ease-out_0.2s] hover:-translate-y-1 transition-transform duration-300`}
                >
                  ONYEKACHI DAVID NWAKAIHE
                </h1>
                <p
                  className={`text-lg ${
                    theme === "light" ? "text-gray-700" : "text-gray-300"
                  } mb-8 leading-relaxed animate-[fadeIn_1s_ease-out_0.4s] hover:scale-[1.01] transition-transform duration-300`}
                >
                  As a Software Engineer with over 5 years of experience in
                  FinTech, healthcare, education, e-commerce, and travel agency
                  solutions, I've had the privilege of building and developing
                  high-quality software that meets user needs and business
                  goals. I'm constantly improving at what I do because of my
                  zeal to learn and solve problems.
                </p>
                <div className="animate-[slideUp_0.5s_ease-out_0.6s]">
                  <Button theme={theme}>READ MORE</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
