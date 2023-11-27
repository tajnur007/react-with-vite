import { createContext, useContext } from "react";
import LoginForm from "./login-form/LoginForm";
import { ThemeContext } from "../ThemeProvider";
import Card from "./mainContainer/Card";


export const PropertyContext = createContext();

const ContextSolution = () => {
  const property = '100 Koti Taka';
  const providerProperty = '200 koti Taka';
  const arr = [1, 2, 3, 4, 5];
  const obj = { a: 1, b: 2, c: 3 };
  const func = () => console.log('Hello!');

  return (
    <PropertyContext.Provider value={{
      property: providerProperty,
      myArr: arr,
      myObj: obj,
      myfunc: func,
    }}>
      <Card />
      <div style={{ height: '90vh', padding: '50px 100px' }}>
        ContextSolution
        <GrandFather property={property} />
      </div>
      <LoginForm isComingFromProvider={true} />
    </PropertyContext.Provider>
  );
};

export default ContextSolution;

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
  const providerProperty = useContext(PropertyContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{
      border: '2px solid purple',
      padding: '30px',
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
    }}>
      Hello I am Child component
      <div>
        Property:{property} <br />
        Provider Property:{providerProperty.property}
      </div>
    </div>
  );
};