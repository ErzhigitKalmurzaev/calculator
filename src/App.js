import { useState } from 'react';
import './style/App.scss';

import ButtonBlock from './components/buttonBlock/ButtonBlock';
import Button from './components/button/Button';
import Screen from './components/screen/Screen';

function App() {

  const [calc, setCalc] = useState({
    sign: '',
    num: '',
    res: 0
  })

  const buttons = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  return (
    <div className="app">
        <Screen value={calc}/>
        <ButtonBlock>
          {buttons.flat().map((val, i) => (
              <Button calc={calc} setCalc={setCalc} value={val} key={i}/>
          ))}
        </ButtonBlock>
    </div>
  );
}

export default App;
