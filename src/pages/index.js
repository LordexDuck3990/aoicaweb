import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Button, Container, Typography, Grid } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import styles from "./styles.module.css";

function CopyToClipboardButton() {
  const [isCopied, setIsCopied] = useState(false);

  const copyTextToClipboard = () => {
    const text = "npm install aoi.canvas";
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      },
      (err) => {
        return;
      }
    );
  };

  return (
    <div className={styles.copyButtonWrapper}>
      <div
        className={styles.copyContent}
        variant="contained"
        color="primary"
        size="large"
      >
        npm install aoi.canvas
        <button
          className={`${styles.copyIconButton} ${
            isCopied ? styles.copied : ""
          }`}
          onClick={copyTextToClipboard}
          type="button"
        >
           <span className={styles.copyIconWrapper}>
            <FileCopyIcon className={styles.copyIcon} />
            {isCopied}
          </span>
        </button>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { title } = siteConfig;

  const heroSubtitle =
    "The most advanced string-based package to create a Discord Bot fast and powerful.";

  return (
    <React.Fragment>
      <Layout
        title="AoiCanvas"
        description="The official aoi.canvas documentation | Powered by lordex"
      >
        <header className={styles.heroBanner}>
        <img src="img/logo.png" width="216" height="216" />
        <Typography
              variant="h1"
              component="h1"
              gutterBottom
              className={styles.title}
            >
              aoi.canvas
            </Typography> 
            <div className={styles.copyButtonWrapper}>
              <CopyToClipboardButton />
            </div>
        </header>
      </Layout>
    </React.Fragment>
  );
}

export default Home;