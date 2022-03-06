import React, { ReactElement } from "react";
import styles from "./How.module.scss";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
        <div className={styles.how_imagesection_screen}>
          <div className={styles.how_image}>
            <div className={styles.how_image_textsection}>
              <h4>Create a free account</h4>
              <p>
                Login to the Zeddpay app and create a free account in a few
                minutes.
              </p>
            </div>
            <Image
              src="https://res.cloudinary.com/zeddpay/image/upload/v1646577895/Rectangle_f4wkgx.svg"
              alt="image"
              width="500"
              height="600"
            />
          </div>
          <div className={styles.how_image}>
            <div className={styles.how_image_textsection}>
              <h4>Create a free account</h4>
              <p>
                Login to the Zeddpay app and create a free account in a few
                minutes.
              </p>
            </div>
            <Image
              src="https://res.cloudinary.com/zeddpay/image/upload/v1646577895/Rectangle_f4wkgx.svg"
              alt="image"
              width="500"
              height="600"
            />
          </div>
          <div className={styles.how_image}>
            <div className={styles.how_image_textsection}>
              <h4>Create a free account</h4>
              <p>
                Login to the Zeddpay app and create a free account in a few
                minutes.
              </p>
            </div>
            <Image
              src="https://res.cloudinary.com/zeddpay/image/upload/v1646577895/Rectangle_f4wkgx.svg"
              alt="image"
              width="500"
              height="600"
            />
          </div>
        </div>
        <div className={styles.how_imagesection_mobile}>
          <Carousel showThumbs={false} showStatus={false}>
            <div className={styles.how_image}>
              <div className={styles.how_image_textsection}>
                <h4>Create a free account</h4>
                <p>
                  Login to the Zeddpay app and create a free account in a few
                  minutes.
                </p>
              </div>
              <Image
                src="https://res.cloudinary.com/zeddpay/image/upload/v1646577895/Rectangle_f4wkgx.svg"
                alt="image"
                width="500"
                height="600"
              />
            </div>
            <div className={styles.how_image}>
              <div className={styles.how_image_textsection}>
                <h4>Create a free account</h4>
                <p>
                  Login to the Zeddpay app and create a free account in a few
                  minutes.
                </p>
              </div>
              <Image
                src="https://res.cloudinary.com/zeddpay/image/upload/v1646577895/Rectangle_f4wkgx.svg"
                alt="image"
                width="500"
                height="600"
              />
            </div>
            <div className={styles.how_image}>
              <div className={styles.how_image_textsection}>
                <h4>Create a free account</h4>
                <p>
                  Login to the Zeddpay app and create a free account in a few
                  minutes.
                </p>
              </div>
              <Image
                src="https://res.cloudinary.com/zeddpay/image/upload/v1646577895/Rectangle_f4wkgx.svg"
                alt="image"
                width="500"
                height="600"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default How;
