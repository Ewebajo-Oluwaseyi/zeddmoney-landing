import React, { ReactElement } from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import heroTopPhone from "@/public/svg/heroTopPhone.svg";
import hands from "@/public/svg/hands.svg";

const About = (): ReactElement => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.about}>
        <div className={styles.about_imagesection1}>
          <Image src={heroTopPhone} alt="image" height="400" width="400" />
        </div>
        <div className={styles.about_textsection}>
          <h3>
            We’re not just making life easy, We’re solving a problem for the
            Gen-z
          </h3>
          <p>
            We created Zeddpay because we want to solve the problem Gen-Z
            encounter while registering for a banl account, and can’t purchase
            anything online without having a credit card. With Zeddpay you don’t
            need a bank account to send or receive money.
          </p>
          <p>
            Our mission is to make sure you enjoy the most convinient, easiest &
            secure way of paying for products and services throughout the
            unicorn platform.
          </p>
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.about_textsection}>
          <h3>Our Vision</h3>
          <p>
            Making online purchasing as easy as possible: Zeddpay, is a
            distributed company of over eight individuals, develops mobile and
            web platforms that provides consumers with the most convenient way
            to buy anything online and pay for it through airtime or Bitcoin.
          </p>
          <p>
            We are a technologically driven young team of entrepreneurs who
            believe that our offerings will revolutionize the African e-commerce
            industry as we endure to deliver excellent products, services and
            experiences to everyone on the continent.
          </p>
          <p>
            Purchase anything online with our Zeddcoin services: Zeddpay gives
            you the power to send and spend airtime online with a simple,
            secure, and convenient way to buy internet services without
            requiring any deposits or bank accounts.
          </p>
        </div>
        <div className={styles.about_imagesection2}>
          <div className={styles.about_image}>
            <h2>Giving</h2>
            <h2>Airtime</h2>
            <h2>Superpowers</h2>
          </div>
          <div className={styles.hands}>
            <Image src={hands} alt="image" height="300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
