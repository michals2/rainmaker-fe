import React from "react";
import { Steps } from "antd";

const Step = Steps.Step;

const AnalysisPageStepsPresenter = ({ step }) =>
  <Steps size="small" current={step}>
    <Step title="Company" />
    <Step title="Duration" />
    <Step title="Training Data" />
    <Step title="Analysis Configuration" />
    <Step title="Analysis" />
    <Step title="Results" />
  </Steps>;

export default AnalysisPageStepsPresenter;
