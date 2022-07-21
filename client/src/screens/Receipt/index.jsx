import { Container, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ReceiptList } from "./ReceiptList";
import { toast } from "react-toastify";

const ROWS = [
  {
    orderId: "1",
    id: "1",
    item: {
      name: "Mobile",
      price: 1337,
    },
    placedAt: new Date(),
  },
  {
    orderId: "2",
    id: "2",
    item: {
      name: "Mobile",
      price: 1337,
    },
    placedAt: new Date(),
  },
  {
    orderId: "3",
    id: "3",
    item: {
      name: "Mobile",
      price: 1337,
    },
    placedAt: new Date(),
  },
  {
    orderId: "4",
    id: "4",
    item: {
      name: "Mobile",
      price: 1337,
    },
    placedAt: new Date(),
  },
];

const Receipt = () => {
  const [receipts, setReceipts] = useState(ROWS);
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadWithToast = async (orderId) => {
    toast.promise(() => handleDownloadFile(orderId), {
      pending: "Generating Receipt.",
      success: "Downloading 👌",
      error: "Something went wrong! 🤯",
    });
  };

  const handleDownloadFile = (orderId) => {
    setIsLoading(true);
    return fetch(`http://localhost:5000/receipt/${orderId}`, { method: "POST" })
      .then((res) => res.blob())
      .then((blob) => {
        if (res.ok) {
          console.log("Res: ", res);
        } else {
          throw Error("Somethig went wrong.");
        }
        setIsLoading(false);
      });
  };

  const fetchReceipts = () => {};

  useEffect(() => {
    fetchReceipts();
  }, []);

  return (
    <Container maxWidth="sm">
      <Paper elevation={4} style={{ marginTop: "2rem", minHeight: "10rem" }}>
        <Typography variant="h5">Orders</Typography>
        <ReceiptList rows={receipts} handleDownload={handleDownloadWithToast} />
      </Paper>
    </Container>
  );
};

export default Receipt;
