import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ReducerProblem from "../components/use-reducer/ReducerProblem";
import ReducerSolution from "../components/use-reducer/ReducerSolution";


const Reducer = () => {
  return (
    <div>
      <Navbar />
      {/* <ReducerProblem /> */}
      <ReducerSolution />
      <Footer />
    </div>
  )
}

export default Reducer;