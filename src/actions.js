export const RECEIVE_BRANDS = "RECEIVE_BRANDS";
export const RECEIVE_YEARS = "RECEIVE_YEARS";
export const RECEIVE_SEASONS = "RECEIVE_SEASONS";
export const CHANGE_RANDOM = "CHANGE_RANDOM";
export const CHANGE_BRAND = "CHANGE_BRAND";
export const CHANGE_YEAR = "CHANGE_YEAR";
export const CHANGE_SEASON = "CHANGE_SEASON";

export function changeBrand(selectedBrands) {
  return {
    type: CHANGE_BRAND,
    selectedBrands,
  };
}

export function changeYear(selectedYears) {
  return {
    type: CHANGE_YEAR,
    selectedYears,
  };
}

export function changeSeason(selectedSeasons) {
  return {
    type: CHANGE_SEASON,
    selectedSeasons,
  };
}

export function changeRandom(selectedOptions) {
  return {
    type: CHANGE_RANDOM,
    selectedOptions,
  };
}

export function receiveBrands(brands) {
  return {
    type: RECEIVE_BRANDS,
    brands,
  };
}

export function receiveYears(years) {
  return {
    type: RECEIVE_YEARS,
    years,
  };
}

export function receiveSeasons(seasons) {
  return {
    type: RECEIVE_SEASONS,
    seasons,
  };
}

// export function setMultiple({selectedBrands, selectedYears, selectedSeasons}) {
//   return (dispatch) => {
//     dispatch(changeBrand(selectedBrands));
//     dispatch(changeSeason(selectedSeasons));
//     dispatch(changeYear(selectedYears));
//   }
// }

export function setMultiple(actions) {
  return (dispatch) => {
    dispatch(changeBrand(actions.selectedBrands));
    dispatch(changeSeason(actions.selectedSeasons));
    dispatch(changeYear(actions.selectedYears));
  };
}

export function fetchBrands() {
  return (dispatch) => {
    fetch(`http://server.local/api/brands`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveBrands(json)));
  };
}

export function fetchYears() {
  return (dispatch) => {
    fetch(`http://server.local/api/years`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveYears(json)));
  };
}

export function fetchSeasons() {
  return (dispatch) => {
    fetch(`http://server.local/api/seasons`)
      .then((response) => response.json())
      .then((json) => dispatch(receiveSeasons(json)));
  };
}
