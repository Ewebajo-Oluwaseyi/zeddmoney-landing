import React, { ReactElement } from "react";
import styles from "./Footer.module.scss";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";

const Footer = (): ReactElement => {
  return (
    <div className={styles.footer_sectionsWrapper}>
      <div className={styles.footer_sections}>
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
        <div className={styles.footer_section}>
          <h4>Legal</h4>
          <p>Terms of Service</p>
          <p>Privacy Guidelines</p>
        </div>
        <div className={styles.footer_section}>
          <h4>Community</h4>
          <p>FAQs</p>
          <p>Blog</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
