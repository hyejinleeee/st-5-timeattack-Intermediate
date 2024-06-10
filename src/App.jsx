import { useSelector } from "react-redux";
import "./App.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { increment, decrement } from "../src/redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const [input, setInput] = useState();
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment(Number(input)));
    setInput("");
  };

  const handleRemove = () => {
    dispatch(decrement(Number(input)));
    setInput("");
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        만큼을 <button onClick={() => handleAdd()}>더할게요</button>
        <button onClick={() => handleRemove()}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>{counter.value}</h3>
      </div>
    </div>
  );
}

export default App;
