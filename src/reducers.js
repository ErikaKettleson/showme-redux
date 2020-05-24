import { combineReducers } from "redux";
import {
  RECEIVE_BRANDS,
  CHANGE_BRAND,
  CHANGE_SEASON,
  CHANGE_YEAR,
  RECEIVE_YEARS,
  RECEIVE_SEASONS,
  CHANGE_RANDOM,
} from "./actions";

const initialDataState = {
  brands: [],
  years: [],
  seasons: [],
};

const initialSelectionState = {
  selectedBrands: [],
  selectedYears: [],
  selectedSeasons: [],
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
      const selectedBrands = action.selectedBrands;
      return {
        ...state,
        selectedBrands,
      };
    }
    case CHANGE_YEAR: {
      const selectedYears = action.selectedYears;
      return {
        ...state,
        selectedYears,
      };
    }
    case CHANGE_SEASON: {
      const selectedSeasons = action.selectedSeasons;
      return {
        ...state,
        selectedSeasons,
      };
    }
    case CHANGE_RANDOM: {
      const selectedOptions = action.selectedOptions;
      return {
        ...state,
        selectedOptions,
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
