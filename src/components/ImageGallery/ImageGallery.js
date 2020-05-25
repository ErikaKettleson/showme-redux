import React, { useState, useEffect, useCallback } from "react";
import "./ImageGallery.scss";
import {colors} from "@material-ui/core";

const ImageGallery = ({ selectedBrands, selectedYears, selectedSeasons }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [imagePaletteIsOpen, setImagePaletteisOpen] = useState(false);

  // an extra div along with the image that shows the palette
  // then, make sure it is hidden by default
  // then, onclick / onhover, unhide it
  // u can track it's hidden-ness via state
  const imagesGrid = (images) => {
    debugger;
    return images.map((image, index) => (
      <div className="thumbnail-image" onClick={openLightbox}>
        <img index={index} src={image.src + ".thumb"} />
        {imagePaletteIsOpen && currentImage===index ? (
          <span> {Object.keys(images[currentImage].colors)} </span>
        ) : null }
      </div>
    ));
  };

  const openLightbox = useCallback((e) => {
    debugger;
    setCurrentImage(Number(e.target.attributes.index.value));
    setImagePaletteisOpen(prev => !prev);
  }, []);

  const formatImagePalette = (imagePalette, color) => {
    return imagePalette.map((color) => (
      <div style={{ backgroundColor: color }}>{color}</div>
    ));
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
        .then((json) => setImages(json))
        .catch((err) => console.log(err));
    }

    fetchData(selectedBrands, selectedYears, selectedSeasons);
  }, [selectedBrands, selectedYears, selectedSeasons]);

  return (
    <div className="image-grid">
      {imagesGrid(images)}
      </div>
  );
};

export default ImageGallery;
