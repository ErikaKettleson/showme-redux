import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Discover.scss';

export default class SeasonDropdown extends Component {
    render() {
        const { value, onChange, seasons } = this.props

        return (
            <span>
                <select onChange={e => onChange(e.target.value)} value={value}>
                    {seasons.map(season=> (
                        <option value={season} key={season}>
                            {season}
                        </option>
                    ))}
                </select>
            </span>
        )
    }
}

SeasonDropdown.propTypes = {
    seasons: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
