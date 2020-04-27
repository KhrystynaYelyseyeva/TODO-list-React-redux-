import React from "react";
import PropTypes from "prop-types";

import "./Footer.css";

const FILTER_BIN = [
    {
        text: 'All',
        id: 'all',
    },
    {
        text: 'Active',
        id: 'active',
    },
    {
        text: 'Completed',
        id: 'completed',
    }
];

const Footer = ({amount, activeFilter, changeFilter}) => (
    <div className="footer">
        <span className="amount">{`${amount} Tasks left`}</span>
        <div className="btn-group">
            {FILTER_BIN.map(({text, id}) => (
                <button
                    onClick={() => {
                        changeFilter(id)
                    }}
                    key={id}
                    className={id === activeFilter ? "filter-btn active" : "filter-btn"}
                >{text}</button>
            ))}
        </div>
    </div>
);

Footer.propTypes = {
    amount: PropTypes.number,
    activeFilter: PropTypes.string,
    changeFilter: PropTypes.func,
};

Footer.defaultProps = {
    amount: 0,
    activeFilter: '',
    changeFilter: () => {
    },
};

export default Footer;