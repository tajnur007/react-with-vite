import { Fragment } from "react";
import Navbar from "../components/navbar/Navbar";
import MainContainer from "../components/mainContainer/MainContainer";
import Footer from "../components/footer/Footer";


const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <MainContainer />
      <Footer />
    </Fragment>
  );
};

export default Home;