import React, { ReactElement, useState } from "react";
import styles from "./Question.module.scss";
import Image from "next/image";
import face from "@/public/svg/face.svg";
import { questions } from "@/mock";

const Question = (): ReactElement => {
  const [showAns, setShowAns] = useState(false);
  return (
    <div className={styles.questionWrapper}>
      <div className={styles.question}>
        <div className={styles.question_textsections}>
          <div className={styles.question_textsection}>
            <h3>Here are some frequently asked questions</h3>
            <p>We answered some questions so you don’t need to ask them.</p>
          </div>

          <div className={styles.question_Questions}>
            {questions.questionsMock.map((item, index) => (
              <div className={styles.question_Question} key={index}>
                <div style={{ width: "80%" }}>
                  <h3>{item.question}</h3>
                  {showAns && <p>{item.answer}</p>}
                </div>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => item.answer && setShowAns(!showAns)}
                >
                  <Image
                    src={showAns ? item.addIcon : item.minusIcon}
                    alt=""
                    width="35"
                    height="35"
                    key={index}
                  />
                </div>
              </div>
            ))}
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
