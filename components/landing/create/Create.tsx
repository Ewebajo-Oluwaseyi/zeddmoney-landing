import React, { ReactElement } from "react";
import styles from "./Create.module.scss";
import Image from "next/image";
import createImage from "@/public/img/Group-239.png";

const Create = (): ReactElement => {
  return (
    <div className={styles.createWrapper}>
      <div className={styles.create}>
        <div className={styles.create_imagesection}>
          <div className={styles.create_image}>
            <Image src={createImage} alt="image" height="400" />
          </div>
        </div>
        <div className={styles.create_textsection}>
          <h3>Purchase anything online with your airtime.</h3>
          <p>
            Shop online, go premium, get assets, pay for services and most
            importantly purchase that new Call of Duty weapon with airtime.
          </p>
          <div className={styles.create_buttons}>
            <button className={styles.create_button}>Get create</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
