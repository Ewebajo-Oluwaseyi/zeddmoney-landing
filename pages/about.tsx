import React from "react";
import type { ReactElement } from "react";
import dynamic from "next/dynamic";

const [FrontLayout, About, Footer] = [
  dynamic(() => import("@/layouts/frontLayout/FrontLayout")),
  dynamic(() => import("@/components/landing/about/About")),
  dynamic(() => import("@/components/landing/footer/Footer")),
];

const Index = () => {
  return (
    <div>
      <About />
      {/*<Create />*/}
      <Footer />
    </div>
  );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};
