import React, { useState, useEffect } from "react";
import Gallery from "react-grid-gallery";
import PaletteButton from "../PaletteButton/PaletteButton";


const ImageGallery = ({ selectedBrands, selectedYears, selectedSeasons }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);

  const getImagePalette = () => {
    alert(images[currentImage].thumbnail);
  };


  const processImageJson = (json) => {
    return json.map((imageUrl) => {
      return {
        src: imageUrl,
        thumbnail: imageUrl + ".thumb",
        thumbnailWidth: 209,
        thumbnailHeight: 314,
      };
    });
  };

  useEffect(() => {
    async function fetchData(selectedBrands, selectedYears, selectedSeasons) {
      const request = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand_name: selectedBrands,
          year: selectedYears,
          season: selectedSeasons,
        }),
      };
      const response = await fetch(`http://server.local/api/images`, request);
      response
        .json()
        .then((json) => processImageJson(json))
        .then((processedJson) => setImages(processedJson))
        .catch((err) => console.log(err));
    }

    fetchData(selectedBrands, selectedYears, selectedSeasons);
  }, [selectedBrands, selectedYears, selectedSeasons]);

  return (
        <Gallery
            images={images}
            currentImageWillChange={setCurrentImage}

            customControls={[
              <PaletteButton
                onButtonClick={getImagePalette}
              />
            ]}
        />
  )
};

export default ImageGallery;
