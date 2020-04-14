import React from "react";

const Table = ({tableHead, tableBody, tableClass}) => {
  return (
    <table className={"table table-bordered table-sm"}>
      <thead>
        {tableHead}
      </thead>
      <tbody>
        {tableBody}
      </tbody>
    </table>
  );
};

export default Table;
