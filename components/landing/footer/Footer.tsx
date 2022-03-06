import React, { useState, ReactElement } from "react";
import styles from "./Footer.module.scss";
import zeddlogo from "@/public/svg/zeddlogo.svg";
import zeddlogolight from "@/public/svg/zeddlogolight.svg";
import facebookIcon from "@/public/svg/facebook.svg";
import instagramIcon from "@/public/svg/instagram.svg";
import twitterIcon from "@/public/svg/twitter.svg";
import Image from "next/image";
import fire from "@/public/svg/fire.svg";
import Link from "next/link";

const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <Image src={zeddlogo} alt="zeddlogo" width="100" height="56" />
        <div>
          <p className={styles.footer_payment}>
            Zeddpay is a payment platform that allows you pay for services with
            your airtime.{" "}
          </p>
        </div>
        <div className={styles.footer_socials}>
          <Link href="/">
            <a className={styles.footer_social}>
              <Image src={facebookIcon} alt="facebook" width="20" height="30" />
            </a>
          </Link>
          <Link href="/">
            <a className={styles.footer_social}>
              <Image src={twitterIcon} alt="twitter" width="20" height="30" />
            </a>
          </Link>
          <Link href="/">
            <a className={styles.footer_social}>
              <Image
                src={instagramIcon}
                alt="instagram"
                width="20"
                height="30"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.footer_sections}>
        <div className={styles.footer_sections1}>
          <div className={styles.footer_section}>
            <h4>Product</h4>
            <p>Create An Account</p>
            <p>Log In</p>
          </div>
          <div className={styles.footer_section}>
            <h4>Company</h4>
            <p>Home</p>
            <p>About Us</p>
            <p>How It Works</p>
          </div>
        </div>
        <div className={styles.footer_sections2}>
          <div className={styles.footer_section}>
            <h4>Legal</h4>
            <p>Terms of Service</p>
            <p>Privacy Guidelines</p>
          </div>
          <div className={styles.footer_section}>
            <h4>Community</h4>
            <p>FAQs</p>
            <p>
              Blog{" "}
              <span>
                <Image src={fire} alt="" />
                COMING SOON
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer_socials1}>
        <Link href="/">
          <a className={styles.footer_social}>
            <Image src={facebookIcon} alt="facebook" width="20" height="30" />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.footer_social}>
            <Image src={twitterIcon} alt="twitter" width="20" height="30" />
          </a>
        </Link>
        <Link href="/">
          <a className={styles.footer_social}>
            <Image src={instagramIcon} alt="instagram" width="20" height="30" />
          </a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
