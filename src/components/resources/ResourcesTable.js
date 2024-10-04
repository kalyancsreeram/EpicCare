import React from "react";
import "./ResourcesComp.scss";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function ResourcesTable({ data }) {
  console.log(data);
  return (
    <TableContainer component={Paper} className="table-container">
      <Table className="resources-table" sx={{ minWidth: 340 }}>
        <TableHead>
          <TableRow>
            <TableCell className="table-header">Features</TableCell>
            <TableCell className="table-header product-name" align="right">
              Seizure Log <br /> (By Seizure Tracker LLC)
            </TableCell>
            <TableCell className="table-header product-name" align="right">
              Epilepsy Toolkit <br /> (By MCM Net Limited)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell className="product-feature-title">
                  {item.feature}
                </TableCell>
                <TableCell className="product-feature-value" align="right">
                  {item.product1}
                </TableCell>
                <TableCell className="product-feature-value" align="right">
                  {item.product2}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ResourcesTable;
