interface Question {
  question: string;
  answer: string;
  addIcon: string;
  minusIcon: string;
}

const questionsMock: Question[] = [
  {
    question: "Can I use my bonus airtime?",
    answer: "Jesus Christ no",
    addIcon: "/svg/add-circle.svg",
    minusIcon: "/svg/minus-circle.svg",
  },
  {
    question:
      "Would the airtime you recharge be the same exact amount in your wallet?",
    answer: "",
    addIcon: "/svg/add-circle.svg",
    minusIcon: "/svg/minus-circle.svg",
  },
  {
    question: "What is ZCN / zedd coin?",
    answer: "",
    addIcon: "/svg/add-circle.svg",
    minusIcon: "/svg/minus-circle.svg",
  },
];

export const questions = {
  questionsMock,
};
