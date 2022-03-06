import React, { ReactElement } from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import moneyIcon from "@/public/svg/money.svg";
import convertIcon from "@/public/svg/convert.svg";
import secureIcon from "@/public/svg/secure.svg";
import heroTopPhone from "@/public/svg/heroTopPhone.svg";

const Hero = (): ReactElement => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroTop}>
        <div className={styles.hero_textsection}>
          <h3>Purchase anything online with your airtime.</h3>
          <p>
            Shop online, go premium, get assets, pay for services and most
            importantly purchase that new Call of Duty weapon with airtime.
          </p>
          <div className={styles.hero_buttons}>
            <button className={styles.hero_button}>Get Started</button>
          </div>
        </div>
        <div className={styles.hero_imagesection}>
          <Image src={heroTopPhone} alt="image" height="600" />
          {/*<div className={styles.avartar}>
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
  </div>*/}
        </div>
      </div>

      <div className={styles.hero_textsection2} style={{ marginTop: "4rem" }}>
        <h4>The easiest way to shop and make purchase online</h4>
        <p>
          Shop online, go premium, get assets, pay for services and most
          importantly purchase that new Call of Duty weapon with airtime.
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
