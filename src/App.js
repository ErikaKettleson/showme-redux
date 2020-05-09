import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    selectBrand,
    fetchBrand,
    selectYear,
    fetchYear,
    selectSeason,
    fetchSeason
} from './actions'
import './App.scss';
import Nav from './Nav';
import MyResponsivePie from './ResponsivePie';
import YearDropdown from './YearDropdown';
import SeasonDropdown from './SeasonDropdown';
import BrandDropdown from './BrandDropdown';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleBrandChange = this.handleBrandChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
    this.handleSeasonChange = this.handleSeasonChange.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedBrand !== prevProps.selectedBrand ) {
      const { dispatch, selectedBrand } = this.props
      dispatch(fetchBrand(selectedBrand))
    } else if (this.props.selectedYear !== prevProps.selectedYear ) {
      const { dispatch, selectedYear } = this.props
      dispatch(fetchYear(selectedYear))
    } else if (this.props.selectedSeason !== prevProps.selectedSeason ) {
      const { dispatch, selectedSeason } = this.props
      dispatch(fetchSeason(selectedSeason))
    }
  }

  handleBrandChange(nextBrand) {
    console.log(nextBrand)
    this.props.dispatch(selectBrand(nextBrand))
    this.props.dispatch(fetchBrand(nextBrand))
  }

  handleYearChange(nextYear) {
    console.log(nextYear)
    this.props.dispatch(selectYear(nextYear))
    this.props.dispatch(fetchYear(nextYear))
  }

  handleSeasonChange(nextSeason) {
    console.log(nextSeason)
    this.props.dispatch(selectSeason(nextSeason))
    this.props.dispatch(fetchSeason(nextSeason))
  }


  render() {
    const { selectedBrand, selectedYear, selectedSeason } = this.props
    return (
      <div className="app">
        <Nav />
        <div className="dropdowns-bar">
          <h1>Show Me:</h1>
          <div class="dropdown-selects">
            <BrandDropdown value={selectedBrand}
            onChange={this.handleBrandChange}
            brands={['Chanel', 'Christian Dior', 'Loewe', 'Dolce & Gabbana']} />
            <YearDropdown value={selectedYear}
            onChange={this.handleYearChange}
            years={[2020, 2019, 2018, 2017, 2016, 2015]} />
            <SeasonDropdown value={selectedSeason}
            onChange={this.handleSeasonChange}
            seasons={['Fall', 'Spring','Pre-Fall', 'Resort', 'Spring Couture', 'Fall Couture']} />
            </div>
          </div>
        <MyResponsivePie />
      </div>
    )
  }
}

App.propTypes = {
  selectedBrand: PropTypes.string.isRequired,
  selectedYear: PropTypes.number.isRequired,
  selectedSeason: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  const { selectedBrand, selectedYear, selectedSeason } = state

  return {
    selectedBrand,
    selectedYear,
    selectedSeason
  }
}

export default connect(mapStateToProps)(App)
