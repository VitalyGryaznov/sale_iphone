import React from "react";
import { Typography, Link } from "@material-ui/core";

function FooterComponent() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Typography className="centered" variant="caption" color="textSecondary">
        Mein iPhone verkaufen ⓒ {currentYear}
        <Link variant="caption" color="textSecondary" href="/impressum">
          ● Impressum
        </Link>
      </Typography>
    </footer>
  );
}

export default FooterComponent;
