import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import HeroSection from "../components/heroSection";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div className="">
      <HeroSection />
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
