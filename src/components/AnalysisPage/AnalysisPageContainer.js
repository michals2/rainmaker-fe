import { compose, withState, withHandlers } from "recompose";

import AnalysisPagePresenter from "./AnalysisPagePresenter";

const addCounting = compose(
  withState("counter", "setCounter", 0),
  withHandlers({
    increment: ({ setCounter }) => () => setCounter(n => n + 1),
    decrement: ({ setCounter }) => () => setCounter(n => n - 1),
    reset: ({ setCounter }) => () => setCounter(0)
  })
);

const AnalysisPageContainer = addCounting(AnalysisPagePresenter);

export default AnalysisPageContainer;
