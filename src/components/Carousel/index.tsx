"use client";
import { useState, useEffect } from "react";

const images = [
  "/html.png",
  "/css.png",
  "/javascript.png",
  "/react.png",
  "/nextjs.png",
  "/bootstrap.png",
  "/tailwind.png",
  "/figma.png",
  "/nodejs.png",
  "/expressjs.png",
  "/mongodb.png",
  "/postgresql.png",
  "/typescript.png",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(6);

  useEffect(() => {
    // Ajustar el número de imágenes por página según el tamaño de la pantalla
    const updateImagesPerPage = () => {
      if (window.innerWidth < 640) {
        setImagesPerPage(2); // Para pantallas pequeñas (móviles)
      } else if (window.innerWidth < 1024) {
        setImagesPerPage(4); // Para pantallas medianas (tabletas)
      } else {
        setImagesPerPage(6); // Para pantallas grandes (escritorios)
      }
    };

    updateImagesPerPage(); // Llamar la función en el primer renderizado
    window.addEventListener("resize", updateImagesPerPage); // Escuchar cambios de tamaño de pantalla

    return () => window.removeEventListener("resize", updateImagesPerPage); // Limpiar el evento al desmontar
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); 
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(images.length / imagesPerPage) - 1
        ? 0
        : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(images.length / imagesPerPage) - 1
        : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-[800px] mx-auto">
      <div className="overflow-hidden mx-4">
        <div
          className="whitespace-nowrap transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-[100px] h-[100px] inline-block rounded-lg mx-4"
            />
          ))}
        </div>
      </div>
      {/* Flechas de navegación */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={handlePrev}
      >
        &larr;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={handleNext}
      >
        &rarr;
      </button>
      {/* Indicadores */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 pb-2">
        {Array(Math.ceil(images.length / imagesPerPage))
          .map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-[#FAA307]" : "bg-gray-400"
              }`}
            />
          ))}
      </div>
    </div>
  );
}
