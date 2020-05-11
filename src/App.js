import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBrands } from "./actions";
import "./App.scss";
import MyResponsivePie from "./components/ResponsivePie/ResponsivePie";
import DisplayImages from "./components/DisplayImages/DisplayImages";
import FilterDropdown from "./components/FilterDropdown/FilterDropdown";

class App extends Component {
  componentDidMount() {
    this.props.fetchBrands();
  }

  render() {
    const { data, selections } = this.props;
    return (
      <div className="app">
        <div className="dropdowns-bar">
          <h1>Show Me:</h1>
          <div class="dropdown-selects">
            <FilterDropdown
              options={data.brands}
              selectedOption={selections.selectedBrand}
              onChange={this.handleBrandChange}
            />
            <FilterDropdown
              options={[
                "Fall",
                "Spring",
                "Pre-Fall",
                "Resort",
                "Spring Couture",
                "Fall Couture",
              ]}
              selectedOption={selections.selectedSeason}
              onChange={this.handleSeasonChange}
            />
            <FilterDropdown
              options={[2020, 2019, 2018, 2017, 2016, 2015]}
              selectedOption={selections.selectedYear}
              onChange={this.handleYearChange}
            />
          </div>
        </div>
        <DisplayImages />
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
