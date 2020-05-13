export const RECEIVE_BRANDS = "RECEIVE_BRANDS";
export const RECEIVE_YEARS = "RECEIVE_YEARS";
export const RECEIVE_SEASONS = "RECEIVE_SEASONS";

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
