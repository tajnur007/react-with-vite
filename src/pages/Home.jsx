import { Fragment } from "react";
import Navbar from "../components/navbar/Navbar";
import MainContainer from "../components/mainContainer/MainContainer";
import Footer from "../components/footer/Footer";
import ContextProblem from "../components/ContextProblem";
import ContextSolution from "../components/ContextSolution";
import MemoProblem from "../components/use-memo/MemoProblem";
import CustomHook from "../components/CustomHook";
import ReducerProblem from "../components/use-reducer/ReducerProblem";
import ReducerSolution from "../components/use-reducer/ReducerSolution";


const Home = () => {
  return (
    <Fragment>
      <Navbar />
      {/* <MainContainer /> */}
      {/* <ContextProblem /> */}
      {/* <ContextSolution /> */}
      {/* <MemoProblem /> */}
      {/* <CustomHook /> */}
      {/* <ReducerProblem /> */}
      <ReducerSolution />
      <Footer />
    </Fragment>
  );
};

export default Home;