import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchBrands,
  fetchYears,
  fetchSeasons,
  changeBrand,
  changeYear,
  changeSeason,
  setMultiple
} from "./actions";
import "./App.scss";
import MyResponsivePie from "./components/ResponsivePie/ResponsivePie";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import FilterDropdown from "./components/FilterDropdown/FilterDropdown";
import RandomButton from "./components/RandomButton/RandomButton";

const formatLabel = (labels=[], className) => (
  labels.map((label) => (
    <span className={className}>{label}</span>
  ))
)

const randomShow = (data) => {
  const selectedBrands = [data.brands[Math.floor(Math.random() * data.brands.length)]];
  const selectedYears = [data.years[Math.floor(Math.random() * data.years.length)]];
  const selectedSeasons = [data.seasons[Math.floor(Math.random() * data.seasons.length)]];
   return ({selectedBrands, selectedSeasons, selectedYears})
}

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
      setRandomSelections
    } = this.props;
    return (
      <div className="app">
        <div className="dropdowns-bar">
          <div className="title-selects">
            <h1>Show Me: </h1>
            <span className="selection-label">
              <div>{formatLabel(selections.selectedBrands, "brand-text")}</div>
              <div>{formatLabel(selections.selectedSeasons, "season-text")}</div>
              <div>{formatLabel(selections.selectedYears, "year-text")}</div>
            </span>
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
            <RandomButton
              onButtonClick={setRandomSelections}
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
    setMultiple(selectedOptions) {
      dispatch(setMultiple(selectedOptions))
    }
  };
}

function mapStateToProps(state) {
  const { data, selections } = state;

  return {
    data,
    selections,
  };
}

function mergeProps(propsFromState, propsFromDispatch, ownProps) {
  return {
    setRandomSelections: () => propsFromDispatch.setMultiple(randomShow(propsFromState.data)),
    ...propsFromState,
    ...propsFromDispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(App);
