import React, { Component } from "react";
import TableHeader from './tableHeader';
import TableBody from './tableBody';


const Table = (props) => {
  
      const {columns, onSort, sortColumns ,data} = props;
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          onSort={onSort}
          sortColumn={sortColumns}
        />
        <TableBody
          data={data}
          columns={columns}
        />
      </table>
    );
}

export default Table;
