import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { format } from "date-fns";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const ReceiptRow = ({ row, handleDownload }) => {
  const {
    orderId,
    item: { name, price },
    placedAt,
  } = row;

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="download"
          onClick={() => handleDownload(orderId)}
        >
          <CloudDownloadIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <ShoppingCartIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={<Typography variant="body1">{name}</Typography>}
        secondary={
          <>
            <Typography variant="subtitle">{`INR ${price}`}</Typography>
            <Typography variant="subtitle">{`Date: ${format(
              placedAt,
              "do MMM yyyy"
            )}`}</Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default ReceiptRow;
