import React from "react";
import type { ReactElement } from "react";
import dynamic from "next/dynamic";

const [FrontLayout, Create, About] = [
  dynamic(() => import("@/layouts/frontLayout/FrontLayout")),
  dynamic(() => import("@/components/landing/create/Create")),
  dynamic(() => import("@/components/landing/about/About")),
];

const Index = () => {
  return (
    <div>
      <About />
      <Create />
    </div>
  );
};

export default Index;

Index.getLayout = function getLayout(page: ReactElement) {
  return <FrontLayout>{page}</FrontLayout>;
};
