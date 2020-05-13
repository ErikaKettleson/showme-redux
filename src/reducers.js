import { combineReducers } from "redux";
import {
  RECEIVE_BRANDS,
  CHANGE_BRAND,
  CHANGE_SEASON,
  CHANGE_YEAR,
  RECEIVE_YEARS,
  RECEIVE_SEASONS,
} from "./actions";

const initialDataState = {
  brands: [],
  years: [],
  seasons: [],
};

const initialSelectionState = {
  selectedBrand: null,
  selectedYear: null,
  selectedSeason: null,
};

function fetchDataReducers(state = initialDataState, action) {
  switch (action.type) {
    case RECEIVE_BRANDS: {
      const brands = action.brands;
      return {
        ...state,
        brands,
      };
    }
    case RECEIVE_YEARS: {
      const years = action.years;
      return {
        ...state,
        years,
      };
    }
    case RECEIVE_SEASONS: {
      const seasons = action.seasons;
      return {
        ...state,
        seasons,
      };
    }
    default:
      return state;
  }
}

function handleSelectionReducers(state = initialSelectionState, action) {
  switch (action.type) {
    case CHANGE_BRAND: {
      const selectedBrand = action.selectedBrand;
      return {
        ...state,
        selectedBrand,
      };
    }
    case CHANGE_YEAR: {
      const selectedYear = action.selectedYear;
      return {
        ...state,
        selectedYear,
      };
    }
    case CHANGE_SEASON: {
      const selectedSeason = action.selectedSeason;
      return {
        ...state,
        selectedSeason,
      };
    }
    default:
      return state;
  }
}

export default combineReducers({
  data: fetchDataReducers,
  selections: handleSelectionReducers,
});
