import React, { useState } from "react";
import styles from "./FrontLayout.module.scss";
import Link from "next/link";
import { navLinks } from "@/mock";
import zeddlogo from "@/public/svg/zeddlogo.svg";
import sidebarIcon from "@/public/svg/sidebar.svg";
import Image from "next/image";
import copyright from "@/public/svg/copyright.svg";

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
            <div style={{ cursor: "pointer" }} className={styles.headerlogo}>
              <Image src={zeddlogo} alt="zeddlogo" />
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
          <div className={styles.header_buttons}>
            <button className={styles.header_button}>Log In</button>
            <button className={styles.header_button}>Get Started</button>
          </div>
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
        <footer className={styles.footerWrapper}>
          <div className={styles.footer}>
            <Image src={copyright} alt="" />
            <p>ZEDDPAY 2022, ALL RIGHTS RESERVED</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Front;
