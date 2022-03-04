import React from "react";
import type { ReactElement } from "react";
import dynamic from "next/dynamic";

const [FrontLayout, Hero, Started, How, Create, Question, Footer] = [
  dynamic(() => import("@/layouts/frontLayout/FrontLayout")),
  dynamic(() => import("@/components/landing/hero/Hero")),
  dynamic(() => import("@/components/landing/started/Started")),
  dynamic(() => import("@/components/landing/how/How")),
  dynamic(() => import("@/components/landing/create/Create")),
  dynamic(() => import("@/components/landing/question/Question")),
  dynamic(() => import("@/components/landing/footer/Footer")),
];

const Index = () => {
  return (
    <div>
      <Hero />
      <Started />
      <How />
      <Create />
      <Question />
      <Footer />
    </div>
  );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};
