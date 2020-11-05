import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

// applied to the currently active page/link
const activeStyles = { color:"#F1EEF6"};

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.5rem 1rem 1rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#F1FAEE`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav className="page-nav"
        style={{
          margin: `.75rem 0 0 0`,
        }}
      >
        <Link to="/aloe-species" activeStyle={activeStyles} partiallyActive={true}>Species List</Link>
        <Link to="/aloe-categories" activeStyle={activeStyles} partiallyActive={true}>Categories</Link>
        <Link to="/aloes-by-flower-color" activeStyle={activeStyles} partiallyActive={true}>Flower Color</Link>
        <Link to="/aloes-by-bloom-time" activeStyle={activeStyles} partiallyActive={true}>Bloom Time</Link>
        <Link to="/aloes-by-location" activeStyle={activeStyles} partiallyActive={true}>Region</Link>
        <Link to="/aloes-by-functional-use" activeStyle={activeStyles} partiallyActive={true}>Use</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
