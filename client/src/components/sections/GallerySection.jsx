import React, { useState, useEffect } from 'react';
import SectionWrapper from '../common/SectionWrapper';
import { fetchGallery } from '../../api/apiService';

function GallerySection() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getImages = async () => {
      try {
        const imageData = await fetchGallery();
        // Display the 8 most recent images
        setImages(imageData.slice(0, 8)); 
      } catch (error) {
        console.error("Failed to load gallery images");
      } finally {
        setLoading(false);
      }
    };
    
    getImages();
  }, []);

  return (
    <SectionWrapper id="gallery" title="Our Gallery">
      {loading ? (
        <p className="text-center text-gray-500">Loading gallery...</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.length > 0 ? (
            images.map((image) => (
              <div key={image._id} className="overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={image.imageUrl}
                  alt={image.caption}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No images found in the gallery.</p>
          )}
        </div>
      )}
    </SectionWrapper>
  );
}

export default GallerySection;