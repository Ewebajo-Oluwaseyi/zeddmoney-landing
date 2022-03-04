import React, { ReactElement } from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import heroImage from "@/public/img/heroImage.png";
import moneyIcon from "@/public/svg/convert.svg";
import convertIcon from "@/public/svg/convert.svg";
import secureIcon from "@/public/svg/secure.svg";
import Avatar6 from "@/public/img/Avatar-6.png";
import dareImg from "@/public/img/dare-emoji 3.png";
import ModalImg from "@/public/img/Modal.png";
import Modal1Img from "@/public/img/Modal1.png";

const Hero = (): ReactElement => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_textsection}>
        <h3>Purchase anything online with your airtime.</h3>
        <p>
          Shop online, go premium, get assets, pay for services and most
          importantly purchase that new Call of Duty weapon with airtime.
        </p>
        <div className={styles.hero_buttons}>
          <button className={styles.hero_button}>Create an account</button>
          <button className={styles.hero_button}>Login</button>
        </div>
      </div>
      <div className={styles.hero_imagesection}>
        <Image src={heroImage} alt="image" height="500" />
        <div className={styles.avartar}>
          <Image src={Avatar6} alt="image" />
        </div>
        <div className={styles.dare}>
          <Image src={dareImg} alt="image" />
        </div>
        <div className={styles.modal}>
          <Image src={ModalImg} alt="image" />
        </div>
        <div className={styles.modal1}>
          <Image src={Modal1Img} alt="image" />
        </div>
      </div>
      <div className={styles.hero_textsection} style={{ marginTop: "1rem" }}>
        <h4>The easiest way to shop and make purchases online</h4>
        <p>
          Convert your airtime to cash and make purchases with Zeddpay in easy
          steps.
        </p>
      </div>
      <div className={styles.hero_bottomsections}>
        <div className={styles.hero_bottomsection}>
          <Image src={convertIcon} alt="image" />
          <h4>Convert airtime instantly</h4>
          <p>
            Zeddpay converts your airtime to cash within minutes in minutes.
          </p>
        </div>
        <div className={styles.hero_bottomsection}>
          <Image src={moneyIcon} alt="image" />
          <h4>Make purchases with airtime</h4>
          <p>
            Zeddpay enables users to easily make purchases with their airtime.
          </p>
        </div>
        <div className={styles.hero_bottomsection}>
          <Image src={secureIcon} alt="image" />
          <h4>Secured and safe transaction</h4>
          <p>
            Zeddpay offers a secure and safe transaction process transaction
            process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
