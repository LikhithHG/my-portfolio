import { useState } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "./Constants";

const categories = ["All", "Teaching Assistant", "Network Software Engineer", "Internship"];

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    //Filter Images based on category
    const filteredImages = selectedCategory === 'All' ? galleryImages : galleryImages.filter((image) => image.category === selectedCategory);

    return (
        <section className="py-16 px-6 md:px-20 bg-gray-900 text-white text-center">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                Experience Gallery
            </h1>

            {/* Category Buttons */}
            <div className="flex justify-center space-x-4 mb-6">
                {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-md font-semibold transition ${
                    selectedCategory === category
                        ? "bg-yellow-400 text-black"
                        : "bg-gray-700 hover:bg-yellow-500"
                    }`}
                >
                    {category}
                </button>
                ))}
            </div>

            {/* Image Grid */}
            <motion.div
                layout
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
                {filteredImages.map((image) => (
                <motion.div
                    key={image.id}
                    className="relative group overflow-hidden rounded-lg shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Gallery;