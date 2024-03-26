import React from "react";
import styles from "./Services.module.css";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import CompanyOverView from "../CompanyOverview/CompanyOverview";

const ServiceOffer = () => {
  const CardWrapper = ({ title, image }) => {
    return (
      <Card className={styles.card} sx={{ maxWidth: 645 }}>
        <CardActionArea>
          <div className={styles.cardMediaWrapper}>
            <CardMedia
              component="img"
              height="300"
              image={image}
              alt="green iguana"
            />
            <div className={styles.overlay}></div>
            <Typography
              className={styles.centeredTitle}
              gutterBottom
              variant="h4"
              component="div"
            >
              {title}
            </Typography>
          </div>
        </CardActionArea>
      </Card>
    );
  };

  return (
    <>
      <section id="sec1">
        <div className={styles.wrap}>
          <div className={styles.uslugeMain}>
            <CardWrapper title="Utility" image="/utility.png" />
            <CardWrapper title="Commercial" image="./commercial.png" />
            <CardWrapper title="Residential" image="./residential.png" />
          </div>
          <CompanyOverView />

          <div className={styles.uslugeMain}>
            <CardWrapper
              title="CSI Solar"
              image="/Products-and-Solutions-600-x-331.jpg"
            />
            <CardWrapper title="Recurrent Energy" image="/recurrent.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceOffer;
