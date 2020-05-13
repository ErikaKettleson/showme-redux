import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchBrands,
  fetchYears,
  fetchSeasons,
  changeBrand,
  changeYear,
  changeSeason,
} from "./actions";
import "./App.scss";
import MyResponsivePie from "./components/ResponsivePie/ResponsivePie";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import FilterDropdown from "./components/FilterDropdown/FilterDropdown";

class App extends Component {
  componentDidMount() {
    this.props.fetchBrands();
    this.props.fetchYears();
    this.props.fetchSeasons();
  }

  render() {
    const {
      data,
      selections,
      handleBrandChange,
      handleSeasonChange,
      handleYearChange,
    } = this.props;
    return (
      <div className="app">
        <div className="dropdowns-bar">
          <div className="title-selects">
            <h1>Show Me: </h1>
            <h2>
              {selections.selectedBrand} {selections.selectedSeason}{" "}
              {selections.selectedYear}
            </h2>
          </div>
          <div className="dropdown-selects">
            <FilterDropdown
              options={data.brands}
              selectedOption={selections.selectedBrand}
              onSelectionChange={handleBrandChange}
            />
            <FilterDropdown
              options={data.seasons}
              selectedOption={selections.selectedSeason}
              onSelectionChange={handleSeasonChange}
            />
            <FilterDropdown
              options={data.years}
              selectedOption={selections.selectedYear}
              onSelectionChange={handleYearChange}
            />
          </div>
        </div>
        <ImageGallery
          selectedBrand={selections.selectedBrand}
          selectedYear={selections.selectedYear}
          selectedSeason={selections.selectedSeason}
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchBrands() {
      dispatch(fetchBrands());
    },
    fetchYears() {
      dispatch(fetchYears());
    },
    fetchSeasons() {
      dispatch(fetchSeasons());
    },
    handleBrandChange(selectedBrand) {
      dispatch(changeBrand(selectedBrand));
    },
    handleSeasonChange(selectedSeason) {
      dispatch(changeSeason(selectedSeason));
    },
    handleYearChange(selectedYear) {
      dispatch(changeYear(selectedYear));
    },
  };
}

function mapStateToProps(state) {
  const { data, selections } = state;

  return {
    data,
    selections,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
