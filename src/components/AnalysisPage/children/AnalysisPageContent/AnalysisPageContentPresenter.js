import React from "react";

import Step0 from "./children/Step0";
import Step1 from "./children/Step1";
// import Step2 from "./children/Step2";

const AnalysisPageContentPresenter = ({ step }) => {
  switch (step) {
    case 0:
      return <Step0 />;
    case 1:
      return <Step1 />;
    default:
      return <Step0 />;
  }
};

export default AnalysisPageContentPresenter;
