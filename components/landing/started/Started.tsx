import React, { ReactElement } from "react";
import styles from "./Started.module.scss";
import Image from "next/image";
import startedImage from "@/public/img/startedImage.png";
import okayHand from "@/public/img/okay-hand 1.png";
import community from "@/public/img/community 1.png";

const Started = (): ReactElement => {
  return (
    <div className={styles.startedWrapper}>
      <div className={styles.started}>
        <div className={styles.started_textsection}>
          <h3>Purchase anything online with your airtime.</h3>
          <p>
            Shop online, go premium, get assets, pay for services and most
            importantly purchase that new Call of Duty weapon with airtime.
          </p>
          <div className={styles.started_buttons}>
            <button className={styles.started_button}>Get started</button>
          </div>
          <div className={styles.okayHand}>
            <Image src={okayHand} alt="image" />
          </div>
        </div>
        <div className={styles.started_imagesection}>
          <div className={styles.started_image}>
            <Image src={startedImage} alt="image" height="400" />
          </div>
          <div className={styles.community}>
            <Image src={community} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
