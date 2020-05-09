import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Discover.scss';

export default class Discover extends Component {
    render() {
        const { value, onChange, brands } = this.props

        return (
        <span>
            <select onChange={e => onChange(e.target.value)} value={value}>
                {brands.map(brand => (
                    <option value={brand} key={brand}>
                        {brand}
                    </option>
                ))}
            </select>
        </span>
        )
    }
}

Discover.propTypes = {
    brands: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}




