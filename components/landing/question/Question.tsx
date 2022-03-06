import React, { ReactElement, useState } from "react";
import styles from "./Question.module.scss";
import Image from "next/image";
import face from "@/public/svg/face.svg";
import { questions } from "@/mock";
import addIcon from "@/public/svg/add-circle.svg";
import minusIcon from "@/public/svg/minus-circle.svg";

const Question = (): ReactElement => {
  const [showAns, setShowAns] = useState(false);
  const [showSecAns, setShowSecAns] = useState(false);
  const [showThirdAns, setShowThirdAns] = useState(false);
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
                {showAns && <p>Jesus Christ no</p>}
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setShowAns(!showAns)}
              >
                <Image
                  src={showAns ? minusIcon : addIcon}
                  alt=""
                  width="35"
                  height="35"
                />
              </div>
            </div>
            <div className={styles.question_Question}>
              <div style={{ width: "80%" }}>
                <h3>
                  Would the airtime you recharge be the same exact amount in
                  your wallet?
                </h3>
                {showSecAns && <p></p>}
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setShowSecAns(!showSecAns)}
              >
                <Image
                  src={showSecAns ? minusIcon : addIcon}
                  alt=""
                  width="35"
                  height="35"
                />
              </div>
            </div>
            <div className={styles.question_Question}>
              <div style={{ width: "80%" }}>
                <h3>What is ZCN / zedd coin?</h3>
                {showThirdAns && <p></p>}
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => setShowThirdAns(!showThirdAns)}
              >
                <Image
                  src={showThirdAns ? minusIcon : addIcon}
                  alt=""
                  width="35"
                  height="35"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.question_imagesection}>
          <div className={styles.question_image}>
            <Image src={face} alt="image" height="500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
