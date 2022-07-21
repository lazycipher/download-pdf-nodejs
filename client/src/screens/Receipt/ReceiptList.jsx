import { List } from "@mui/material";
import React from "react";
import ReceiptRow from "./ReceiptRow";

export const ReceiptList = ({ rows = [], handleDownload }) => {
  return (
    <List dense={true}>
      {rows.map((row) => (
        <ReceiptRow key={row.id} row={row} handleDownload={handleDownload} />
      ))}
    </List>
  );
};
