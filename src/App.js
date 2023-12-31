import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: tomato;
`;

function App() {
  return (
    <Father>
      <Btn>Log In</Btn>
      <Btn as="a" href="/">
        Home
      </Btn>
      <Input />
    </Father>
  );
}

export default App;
