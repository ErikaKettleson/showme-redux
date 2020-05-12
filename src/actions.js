export const RECEIVE_BRANDS = "RECEIVE_BRANDS";
export const CHANGE_BRAND = "CHANGE_BRAND";
export const CHANGE_YEAR = "CHANGE_YEAR";
export const CHANGE_SEASON = "CHANGE_SEASON";

export function changeBrand(selectedBrand) {
  return {
    type: CHANGE_BRAND,
    selectedBrand,
  };
}

export function changeYear(selectedYear) {
    return {
      type: CHANGE_YEAR,
      selectedYear,
    };
  }

export function changeSeason(selectedSeason) {
return {
    type: CHANGE_SEASON,
    selectedSeason,
};
}

export function receiveBrands(brands) {
  return {
    type: RECEIVE_BRANDS,
    brands,
  };
}

export function fetchBrands() {
  return (dispatch) => {
    fetch(`http://server.local/api/brands`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveBrands(json)));
  };
}


// function formatImagesForGallery(json) {
//     json.map(imageUrl => {
//         return (
//             {
//                 src: imageUrl,
//                 thumbnail: imageUrl,
//                 thumbnailWidth: 320,
//                 thumbnailHeight: 174,
//             }
//         )
//     })
// }

// export function fetchBrand(selectedBrand) {
//     const request = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({"brand_name": [selectedBrand]})
//     }
//     debugger;
//     return ( dispatch ) => {
//         fetch(`http://server.local/api/images`, request)
//         .then((response) => response.json())
//         .then((json) => formatImagesForGallery(json))
//         .then(formattedGalleryImages => dispatch())
//     }

// }

