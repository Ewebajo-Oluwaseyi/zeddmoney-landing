import React, { useState } from "react";
import styles from "./FrontLayout.module.scss";
import Link from "next/link";
import { navLinks } from "@/mock";
import zeddLogo from "@/public/svg/zeddLogo.svg";
import zeddlogolight from "@/public/svg/zeddlogolight.svg";
import facebookIcon from "@/public/svg/facebook.svg";
import instagramIcon from "@/public/svg/instagram.svg";
import twitterIcon from "@/public/svg/twitter.svg";
import sidebarIcon from "@/public/svg/sidebar.svg";
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

const Front = ({ children }: Props) => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className={styles.layout}>
        <header className={styles.header}>
          <Link href="/">
            <div style={{ cursor: "pointer" }}>
              <Image src={zeddLogo} alt="zeddlogo" />
            </div>
          </Link>

          <nav>
            <ul className={styles.header_menuList}>
              {navLinks.frontLinks.map((item, index) => (
                <li className={styles.header_menuItem} key={index}>
                  <Link href={item.url}>
                    <a
                      target={item.blank ? "_blank" : "_self"}
                      className={styles.header_menuLink}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div
            className={styles.sidebarIcon}
            onClick={() => setShowNav(!showNav)}
          >
            <Image src={sidebarIcon} alt="" />
          </div>
        </header>
        <div className={styles.topNav}>
          <nav
            className={showNav ? `${styles.show}` : `${styles.hide}`}
            style={{ display: "none" }}
          >
            <ul className={styles.header_menuList}>
              {navLinks.frontLinks.map((item, index) => (
                <li className={styles.header_menuItem} key={index}>
                  <Link href={item.url}>
                    <a
                      target={item.blank ? "_blank" : "_self"}
                      className={styles.header_menuLink}
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <main>{children}</main>
        <footer className={styles.footer}>
          <Image src={zeddlogolight} alt="zeddlogo" width="100" height="56" />
          <div>
            <p className={styles.footer_payment}>
              Zeddpay is a payment platform that allows you pay for services
              with your airtime.{" "}
            </p>
          </div>
          <div className={styles.footer_socials}>
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
            <Link href="/">
              <a className={styles.footer_social}>
                <Image src={twitterIcon} alt="twitter" width="20" height="30" />
              </a>
            </Link>
            <Link href="/">
              <a className={styles.footer_social}>
                <Image
                  src={facebookIcon}
                  alt="facebook"
                  width="20"
                  height="30"
                />
              </a>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Front;
