import { useState } from "react";


const ReducerProblem = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [country, setCountry] = useState('');
  const [age, setAge] = useState(0);
  const [profession, setProfession] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
  }

  const handleNameInput = (e) => {
    setName(e.target.value);
  }

  return (
    <div style={{ height: '90vh', padding: '50px 100px' }}>
      <form onSubmit={handleFormSubmit}>
        <p>
          Name: <input onChange={handleNameInput} type="text" />
        </p>
        <p>
          Email: <input type="email" />
        </p>
        <p>
          Mobile: <input type="text" />
        </p>
        <p>
          Country: <input type="text" />
        </p>
        <p>
          Age: <input type="number" />
        </p>
        <p>
          Profession: <input type="text" />
        </p>
        <div>
          <button type="submit"> Submit Form </button>
        </div>
      </form>
    </div>
  )
}

export default ReducerProblem;