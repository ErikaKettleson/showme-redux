export const SELECT_BRAND = 'SELECT_BRAND'
export const FETCH_BRAND = 'FETCH_BRAND'
export const SELECT_YEAR = 'SELECT_YEAR'
export const FETCH_YEAR = 'FETCH_YEAR'
export const SELECT_SEASON = 'SELECT_SEASON'
export const FETCH_SEASON = 'FETCH_SEASON'

export const RECEIVE_BRANDS = 'RECEIVE_BRANDS'

export function receiveBrands(brands) {
    return {
        type: RECEIVE_BRANDS,
        brands
    }
}

export function fetchBrands() {
    return function(dispatch) {
        return fetch(`http://server.local/api/brands`)
        .then(
            response => response.json()
        )
        .then(json => {
            debugger
            dispatch(receiveBrands(json))
        })
    }
}



export function selectBrand(brand) {
    return {
        type: SELECT_BRAND,
        brand
    }
}

export function fetchBrand(brand) {
    return {
        type: FETCH_BRAND,
        brand
    }
}

export function selectYear(year) {
    return {
        type: SELECT_YEAR,
        year
    }
}

export function fetchYear(year) {
    return {
        type: FETCH_YEAR,
        year
    }
}

export function selectSeason(season) {
    return {
        type: SELECT_SEASON,
        season
    }
}

export function fetchSeason(season) {
    return {
        type: FETCH_SEASON,
        season
    }
}
