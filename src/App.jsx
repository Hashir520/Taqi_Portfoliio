import React from "react";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import wave from "./assets/wave.jpg";
import wave1 from "./assets/wave1.jpg";
import Reviews from "./components/Reviews"

const App = () => {
  return (
    <div className="bg-[var(--background)] max-w-screen ">
      <div className="" style={{
        // backgroundImage: `url(${wave})`,
        backgroundPosition: "50% 50%"
      }}>
      <Navbar  />
      <Hero />
      </div>
      
      <Skills />
      <WorkExperience />
      <Reviews/>
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;


// import React from "react";
// import AboutMe from "./components/AboutMe";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Skills from "./components/Skills";
// import WorkExperience from "./components/WorkExperience";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import wave from "./assets/wave.jpg"; // Ensure this is the correct path
// import Reviews from "./components/Reviews";

// const App = () => {
//   return (
//     <div className="bg-[var(--background)] max-w-screen">
//       {/* Apply the background image directly to this div */}
//       <div
//         style={{
//           backgroundImage: `url(${wave})`, // Un-comment this to apply the background image
//           backgroundPosition: "50% 50%",
//           backgroundSize: "cover", // Optional: Adjusts the background image size
//           backgroundRepeat: "no-repeat", // Optional: Prevents the image from repeating
//         }}
//       >
//         <Navbar />
//         <Hero />
//       </div>
      
//       {/* Other sections */}
//       <Skills />
//       <WorkExperience />
//       <Reviews />
//       <AboutMe />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default App;
