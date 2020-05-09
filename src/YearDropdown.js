import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Discover.scss';

export default class YearDropdown extends Component {
    render() {
        const { value, onChange, years } = this.props

        return (
            <span>
                <select onChange={e => onChange(e.target.value)} value={value}>
                    {years.map(year => (
                        <option value={year} key={year}>
                            {year}
                        </option>
                    ))}
                </select>
            </span>
        )
    }
}

YearDropdown.propTypes = {
    years: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}
