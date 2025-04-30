import React from "react";
import { FaStar } from "react-icons/fa";

const CLIENT_REVIEWS = [
  {
    name: "Scotttuck",
    flag: "https://flagcdn.com/us.svg",
    review:
      "I was very pleased with the outcomes. He brought my idea to life and did it very quickly. I have already placed my second order. I would highly recommend.",
  },
  {
    name: "ENNIOPAN'S",
    flag: "https://flagcdn.com/de.svg",
    review:
      "He was very professional in his work and good communication skill and delivered project on time. I will need him again, thanks again.",
  },
  {
    name: "mizuxo's",
    flag: "https://flagcdn.com/gb.svg",
    review:
      "He did a good job, He was polite, He was Very Professinal, and took my comments into consideration and dedication,  I would highly recommend.",
  },

];

const ImageGrid = () => {
  return (
    <section
      className="max-w-screen-xl mx-auto px-6 md:px-20 py-16"
      id="image-grid"
    >
      <h5 className="text-[var(--primary)] text-2xl md:text-3xl font-semibold text-center mb-12">
        Client Reviews
      </h5>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {CLIENT_REVIEWS.map((client, index) => (
          <div
            key={index}
            className="relative bg-[var(--cardbg)] text-[var(--white)] p-6 pt-10 rounded shadow-md flex flex-col justify-between h-56"
          >
            <p className="mb-4 text-sm leading-relaxed">{client.review}</p>

            <div className="mt-auto mb-4 flex  space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>

            <div className="bg-[var(--navbg)] text-center py-2 text-sm font-semibold flex justify-center items-center space-x-2">
              <img
                src={client.flag}
                alt="flag"
                className="w-5 h-4 object-cover rounded-sm"
              />
              <span>{client.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
