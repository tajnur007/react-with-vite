

const ContextProblem = () => {
  const PROPERTY = '100 Koti Taka';
  return (
    <div style={{ height: '90vh', padding: '50px 100px' }}>
      ContextProblem
      <GrandFather property={PROPERTY} />
    </div>
  );
};

export default ContextProblem;

const GrandFather = (props) => {
  const { property } = props;
  return (
    <div style={{ border: '2px solid black', padding: '30px' }}>
      Hello I am GrandFather component
      <Father property={property} />
    </div>
  );
};

const Father = (props) => {
  const { property } = props;
  return (
    <div style={{ border: '2px solid blue', padding: '30px' }}>
      Hello I am Father component
      <Myself property={property} />
    </div>
  );
};

const Myself = (props) => {
  const { property } = props;
  return (
    <div style={{ border: '2px solid red', padding: '30px' }}>
      Hello I am Myself component
      <Child property={property} />
    </div>
  );
};

const Child = (props) => {
  const { property } = props;
  return (
    <div style={{ border: '2px solid purple', padding: '30px' }}>
      Hello I am Child component
      <div>
        Property: {property}
      </div>
    </div>
  );
};