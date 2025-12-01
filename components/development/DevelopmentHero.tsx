"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const developments = [
  {
    id: 1,
    name: "Sunset Heights Residence",
    location: "Westlands, Nairobi",
    image: "/slideone.jpg",
    progress: 65,
    description:
      "A modern high‑rise apartment featuring glass balconies and a panoramic city view.",
  },
  {
    id: 2,
    name: "Greenwood Villas",
    location: "Karen, Nairobi",
    image: "/slidetwo.jpg",
    progress: 40,
    description:
      "Elegant townhouses surrounded by lush greenery and serene walkways.",
  },
  {
    id: 3,
    name: "Azure Towers",
    location: "Upper Hill, Nairobi",
    image: "/slidethree.jpg",
    progress: 80,
    description:
      "A luxury commercial & residential mix-use tower with a blue‑tinted exterior.",
  },
  {
    id: 4,
    name: "Palm Crest Apartments",
    location: "Mombasa Road, Nairobi",
    image: "/slidefour.jpg",
    progress: 55,
    description:
      "Coastal‑inspired apartments featuring warm textures and airy interiors.",
  },
  {
    id: 5,
    name: "Oakridge Estate",
    location: "Ruiru, Kiambu",
    image: "/slidefive.jpg",
    progress: 30,
    description:
      "A gated community with contemporary homes designed for growing families.",
  },
];

const DevelopmentHeroOne = () => {
  return (
    <section className="w-full py-16 bg-gray-50" id="developments">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-10 text-center">
          Ongoing Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {developments.map((dev) => (
            <motion.div
              key={dev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-56 w-full">
                <Image
                  src={dev.image}
                  alt={dev.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {dev.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{dev.location}</p>
                <div className="w-full bg-white text-gray-700 rounded-full h-5 m-2">
                  <span>Progress</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                  <div
                    className="bg-gray-500 h-3 rounded-full"
                    style={{ width: `${dev.progress}%` }}></div>
                </div>
                <p className="text-gray-700 text-sm">{dev.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default DevelopmentHeroOne;
