import React from "react";
import { Typography, Grid, Divider, Button } from "@material-ui/core";

function FooterComponent() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Typography className="centered" variant='h10'>Mein iPhone verkaufen ⓒ {currentYear}</Typography>
    </footer>
  );
}

export default FooterComponent;