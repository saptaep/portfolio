import { useState, useEffect } from "react";
import about10 from "../assets/about10.png";
// import about3 from "../assets/about3.jpg";
import about14 from "../assets/about14.png";

const images = [about10, about14];

export default function About() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      className="py-52 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16"
    >
      {/* Gambar (Kiri) */}
      <div className="relative w-full md:w-1/2 h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`About Slide ${index}`}
            className={`w-full h-full object-cover transition-all duration-1000 ${
              index === current
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full absolute inset-0"
            }`}
          />
        ))}

        {/* Tombol Prev */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white shadow"
        >
          ◀
        </button>

        {/* Tombol Next */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white shadow"
        >
          ▶
        </button>
      </div>

      {/* Teks (Kanan) */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-12">About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Hi, let me introduce myself. My name is Sapta Eka Putra. I come from
          West Sumatra, specifically from Sintuk Toboh Gadang District, Padang Pariaman
          Regency.
          <br />
          
          I am currently studying at the Padang Institute of Technology,
          majoring in Informatics Engineering. I am part of the class of 2022
          and passionate about exploring new knowledge in the tech world.
          <br />
          <br />
          You can find and connect with me through the website I’ve built and
          the contact information I’ve shared.
          <br />
          Thank you!
        </p>
      </div>
    </section>
  );
}
