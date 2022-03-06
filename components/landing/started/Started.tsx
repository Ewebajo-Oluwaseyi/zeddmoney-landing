import React, { ReactElement } from "react";
import styles from "./Started.module.scss";
import Image from "next/image";
import Rectangle2 from "@/public/img/Rectangle2.png";

const Started = (): ReactElement => {
  const breakPoints = [];
  return (
    <div className={styles.startedWrapper}>
      <div className={styles.started}>
        <div className={styles.started_textsection}>
          <h3>Easily make purchases from your favourite services</h3>
          <p>
            Make purchases from your favourite services such as; Amazon, Spotify
            and Bitcoin directly from your virtual wallet.
          </p>
          <div className={styles.started_buttons}>
            <button className={styles.started_button}>Get started</button>
          </div>
          {/*<div className={styles.okayHand}>
            <Image src={okayHand} alt="image" />
  </div>*/}
        </div>
        <div className={styles.started_imagesection}>
          <div className={styles.started_image}>
            {/*<Image
              src={startedImage}
              alt="image"
              height="800"
              className={styles.started_image1}
            />*/}
            <Image
              src={Rectangle2}
              alt="image"
              height="500"
              width="400"
              className={styles.started_image2}
            />
          </div>
          {/* <div className={styles.community}>
            <Image src={community} alt="image" />
  </div>*/}
        </div>
      </div>
    </div>
  );
};

export default Started;
