import { withStateHandlers } from "recompose";

import AnalysisPagePresenter from "./AnalysisPagePresenter";

const firstStep = 0;
const lastStep = 5;

const withState = withStateHandlers(
  ({ initialStep = 0 }) => ({
    step: initialStep
  }),
  {
    increment: ({ step }) => () => {
      let nextStep = step + 1;
      nextStep = nextStep <= lastStep ? nextStep : lastStep;

      return { step: nextStep };
    },
    decrement: ({ step }) => () => {
      let nextStep = step - 1;
      nextStep = nextStep >= firstStep ? nextStep : firstStep;

      return { step: nextStep };
    }
  }
);

const AnalysisPageWithState = withState(AnalysisPagePresenter);

export default AnalysisPageWithState;
