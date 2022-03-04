import React, { ReactElement } from "react";
import styles from "./Question.module.scss";
import Image from "next/image";
import phoneImage from "@/public/img/phone1.png";
import addCircleIcon from "@/public/svg/add-circle.svg";
import minusCircleIcon from "@/public/svg/minus-circle.svg";

const Question = (): ReactElement => {
  return (
    <div className={styles.questionWrapper}>
      <div className={styles.question}>
        <div className={styles.question_textsections}>
          <div className={styles.question_textsection}>
            <h3>Here are some frequently asked questions</h3>
            <p>We answered some questions so you don’t need to ask them.</p>
          </div>

          <div className={styles.question_Questions}>
            <div className={styles.question_Question}>
              <div style={{ width: "80%" }}>
                <h3>Can I use my bonus airtime?</h3>
                <p>Jesus Christ no</p>
              </div>
              <div style={{ cursor: "pointer" }}>
                <Image src={minusCircleIcon} alt="" />
              </div>
            </div>
            <div className={styles.question_Question}>
              <div style={{ width: "80%" }}>
                <h3>
                  Would the airtime you recharge be the same exact amount in
                  your wallet ?
                </h3>
              </div>
              <div style={{ cursor: "pointer" }}>
                <Image src={addCircleIcon} alt="" />
              </div>
            </div>
            <div className={styles.question_Question}>
              <div style={{ width: "80%" }}>
                <h3>What is ZCN / zedd coin?</h3>
              </div>
              <div style={{ cursor: "pointer" }}>
                <Image src={addCircleIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.question_imagesection}>
          <div className={styles.question_image}>
            <Image src={phoneImage} alt="image" height="500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
