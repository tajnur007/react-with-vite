import { Fragment } from "react";
import Navbar from "../components/navbar/Navbar";
import MainContainer from "../components/mainContainer/MainContainer";
import Footer from "../components/footer/Footer";
import ContextProblem from "../components/ContextProblem";
import ContextSolution from "../components/ContextSolution";


const Home = () => {
  return (
    <Fragment>
      <Navbar />
      {/* <MainContainer /> */}
      {/* <ContextProblem /> */}
      <ContextSolution />
      <Footer />
    </Fragment>
  );
};

export default Home;