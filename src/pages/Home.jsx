import { Fragment } from "react";
import Navbar from "../components/navbar/Navbar";
import MainContainer from "../components/mainContainer/MainContainer";
import Footer from "../components/footer/Footer";
import ContextProblem from "../components/ContextProblem";
import ContextSolution from "../components/ContextSolution";
import MemoProblem from "../components/use-memo/MemoProblem";
import CustomHook from "../components/CustomHook";


const Home = () => {
  return (
    <Fragment>
      <Navbar />
      {/* <MainContainer /> */}
      {/* <ContextProblem /> */}
      {/* <ContextSolution /> */}
      <MemoProblem />
      {/* <CustomHook /> */}
      <Footer />
    </Fragment>
  );
};

export default Home;