export const RECEIVE_BRANDS = "RECEIVE_BRANDS";

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
