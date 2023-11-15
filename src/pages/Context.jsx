import ContextProblem from "../components/ContextProblem";
import ContextSolution from "../components/ContextSolution";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";


const Context = () => {
  return (
    <div>
      <Navbar />
      {/* <ContextProblem /> */}
      <ContextSolution />
      <Footer />
    </div>
  )
}

export default Context;