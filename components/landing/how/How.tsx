import React, { ReactElement } from "react";
import styles from "./How.module.scss";
import Image from "next/image";
import createImage from "@/public/img/Group-221.png";
import activateImage from "@/public/img/Group-222.png";
import creditImage from "@/public/img/Group-223.png";
import makeImage from "@/public/img/Group-224.png";

const How = (): ReactElement => {
  return (
    <div className={styles.how}>
      <div className={styles.how_textsection}>
        <h3>How it works</h3>
        <p>
          Convert your airtime to cash and make purchases with Zeddpay in 4 easy
          steps
        </p>
      </div>
      <div className={styles.how_imagesection}>
        <div className={styles.how_image}>
          <Image src={createImage} alt="image" />
        </div>
        <div className={styles.how_image}>
          <Image src={activateImage} alt="image" />
        </div>
        <div className={styles.how_image}>
          <Image src={creditImage} alt="image" />
        </div>
        <div className={styles.how_image}>
          <Image src={makeImage} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default How;
