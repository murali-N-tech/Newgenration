import React, { useState, useEffect } from 'react';
import SkeletonCard from '../ui/SkeletonCard';
import { fetchGallery } from '../../api/apiService';

function GallerySection() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      try {
        const imageData = await fetchGallery();
        setImages(imageData);
      } catch (error) {
        console.error("Failed to load gallery images", error);
      } finally {
        setLoading(false);
      }
    };
    
    getImages();
  }, []);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section id="gallery" className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-100 to-pink-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#00008B] mb-12 font-display">
          Our Gallery
        </h2>

        {/* Gallery Grid */}
        {loading ? (
          <div className="columns-2 md:columns-3 gap-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} className="h-64 mb-4" />
            ))}
          </div>
        ) : (
          <div className="columns-2 md:columns-3 gap-4">
            {images.length > 0 ? (
              images.map((image) => (
                <div 
                  key={image._id} 
                  className="mb-4 break-inside-avoid cursor-pointer"
                  onClick={() => openModal(image)}
                >
                  <img
                    src={image.imageUrl}
                    alt={image.caption}
                    className="w-full h-auto object-cover rounded-lg shadow-md border-2 border-transparent hover:border-[#008080] transition-all duration-300"
                  />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                No images found in the gallery.
              </p>
            )}
          </div>
        )}

        {/* Image Modal (Lightbox) */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
            onClick={closeModal}
          >
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.caption}
              className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-[#008080]"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            />
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              aria-label="Close image view"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default GallerySection;
