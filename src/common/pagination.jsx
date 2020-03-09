import React, { Component } from "react";
import _ from "lodash";
import PropTypes from "prop-types";

class Pagination extends Component {
  render() {
    const { itemCount, pageSize, currentPage } = this.props;
    const pagesCount = Math.ceil(itemCount / pageSize);
    console.log("pagesCounte", pagesCount);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);
    console.log("pageArray", pages);

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map(page => {
            return (
              <li
                key={page}
                className={
                  currentPage === page ? "page-item active" : "page-item"
                }
              >
                <a
                  className="page-link"
                  onClick={() => this.props.onPageChange(page)}
                  href="#"
                >
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize:PropTypes.number.isRequired,
  currentPage:PropTypes.number.isRequired,
};

export default Pagination;
