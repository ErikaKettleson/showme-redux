import React, { useState, useEffect } from "react";
import Gallery from "react-grid-gallery";
import PalettePopper from "../PalettePopper/PalettePopper";
import {red} from "@material-ui/core/colors";

const ImageGallery = ({ selectedBrands, selectedYears, selectedSeasons }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [imagePalette, setImagePalette] = useState([]);

  const getImagePalette = () => {
    console.log(images[currentImage].thumbnail);
    // temp mock palette
    const imagePalette = ["#EEF0EF", "#808080", "#DAF7A6", "#FFC300", "#FF5733", "#C70039", "#900C3F", "#581845"]
    setImagePalette(imagePalette);
  };

  const formatImagePalette = (imagePalette, color) => {
    return imagePalette.map((color) => (
      <div style={{backgroundColor: color}}>{color}</div>
    ))
  }

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
              <PalettePopper
                onButtonClick={getImagePalette}
                content={formatImagePalette(imagePalette)}
              />
            ]}
        />
  )
};

export default ImageGallery;
