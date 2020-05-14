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

const formatLabel = (labels, className) => (
  labels.map((label) => (
    <span className={className}>{label}</span>
  ))
)

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
            <p className="selection-label">
              <div>{formatLabel(selections.selectedBrands, "brand-text")}</div>
              <div>{formatLabel(selections.selectedSeasons, "season-text")}</div>
              <div>{formatLabel(selections.selectedYears, "year-text")}</div>
            </p>
          </div>
          <div className="dropdown-selects">
            <FilterDropdown
              options={data.brands}
              selectedOptions={selections.selectedBrands}
              onSelectionChange={handleBrandChange}
              label="Brands"
            />
            <FilterDropdown
              options={data.seasons}
              selectedOptions={selections.selectedSeasons}
              onSelectionChange={handleSeasonChange}
              label="Seasons"
            />
            <FilterDropdown
              options={data.years}
              selectedOptions={selections.selectedYears}
              onSelectionChange={handleYearChange}
              label="Years"
            />
          </div>
        </div>
        <ImageGallery
          selectedBrands={selections.selectedBrands}
          selectedYears={selections.selectedYears}
          selectedSeasons={selections.selectedSeasons}
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
    handleBrandChange(selectedBrands) {
      dispatch(changeBrand(selectedBrands));
    },
    handleSeasonChange(selectedSeasons) {
      dispatch(changeSeason(selectedSeasons));
    },
    handleYearChange(selectedYears) {
      dispatch(changeYear(selectedYears));
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
