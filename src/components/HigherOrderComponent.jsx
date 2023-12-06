import AnotherComponent from "./AnotherComponent";


const HigherOrderComponent = (props) => {
  const { insideComponent } = props;


  return (
    <AnotherComponent />
  );


  return (
    <div>
      HigherOrderComponent
      {insideComponent}
    </div>
  );
};

export default HigherOrderComponent;