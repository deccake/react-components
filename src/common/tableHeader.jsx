import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = colName => {
    console.log("in sort ", colName);
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === colName) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = colName;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
      console.log("in sortIcon",column)
      if(column.path !== this.props.sortColumn.path) return null;
      if(this.props.sortColumn.order === 'asc') return <i className="fa fa-sort-asc"></i>
       return <i className="fa fa-sort-desc"></i>
  }

  render() {
      console.log("colums in renver" , this.props.columns)
    return (
      <thead>
        <tr>
          {this.props.columns.map(c => (
            <th className='clickable' key={c.path || c.key} onClick={() => this.raiseSort(c.path)}>
              {c.label} {this.renderSortIcon(c)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
