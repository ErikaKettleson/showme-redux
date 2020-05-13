import React, { useState, useEffect } from "react";
import Gallery from "react-grid-gallery";

const ImageGallery = ({ selectedBrands, selectedYears, selectedSeasons }) => {
  const [images, setImages] = useState([]);

  const processImageJson = (json) => {
    return json.map((imageUrl) => {
      return {
        src: imageUrl,
        thumbnail: imageUrl,
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

  return <Gallery images={images} />;
};

export default ImageGallery;

// function fetchBrand(selectedBrand) {
//   const request = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({
//       brand_name: [selectedBrand],
//       year: [2019],
//       season: ["fall"],
//     }),
//   };
//   fetch(`http://server.local/api/images`, request)
//     .then((response) => response.json())
//     .then((json) => {
//       debugger;
//       let images = json.map((imageUrl) => {
//         return {
//           src: imageUrl,
//           thumbnail: imageUrl,
//           thumbnailWidth: 174,
//           thumbnailHeight: 320,
//         };
//       });
//       return images;
//       // return json.map(imageUrl => {
//       //     return (
//       //         {
//       //         src: imageUrl,
//       //         thumbnail: imageUrl,
//       //         thumbnailWidth: 174,
//       //         thumbnailHeight: 320,
//       //         }
//       //     );
//       // });
//     });
// }

// export const DisplayImages = ({ brand }) => {
//   const images = [
//     {
//       src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//       thumbnail:
//         "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//       thumbnailWidth: 320,
//       thumbnailHeight: 174,
//     },
//   ];
//   if (brand) {
//     const images = fetchBrand(brand);
//     return <Gallery images={images} />;
//   } else {
//     return <Gallery images={images} />;
//   }
//   // return <Gallery images={images} />
// };

// export default DisplayImages;
