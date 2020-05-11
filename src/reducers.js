import { combineReducers } from 'redux'
import {
    SELECT_BRAND,
    FETCH_BRAND,
    SELECT_YEAR,
    FETCH_YEAR,
    SELECT_SEASON,
    FETCH_SEASON,
    RECEIVE_BRANDS
} from './actions'

function populateBrands(state = {brands: []}, action) {
    switch(action.type) {
        case RECEIVE_BRANDS:
            const brands = action.brands
            return [
                ...state,
                brands
            ]
        default:
            return state
    }
}

function selectedBrand(state = '', action) {
    switch (action.type) {
        case SELECT_BRAND:
        case FETCH_BRAND:
            return action.brand
        default:
            return state
    }
}

function selectedYear(state = '', action) {
    switch (action.type) {
        case SELECT_YEAR:
        case FETCH_YEAR:
            return action.year
        default:
            return state
    }
}

function selectedSeason(state = '', action) {
    switch (action.type) {
        case SELECT_SEASON:
        case FETCH_SEASON:
            return action.season
        default:
            return state
    }
}

const rootReducer = combineReducers({
    populateBrands,
    selectedBrand,
    selectedYear,
    selectedSeason
})

export default rootReducer
