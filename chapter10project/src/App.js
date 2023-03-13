import './App.css';
import {useState, React} from 'react';
import { ColorBox } from './ColorBox';
import InputColor from './InputColor';

function App() {
  const [color, setColor] = useState('');
  return (
    <div class="main">
      <div class="container">
        <ColorBox
          color={color}
        />
        <InputColor
          color={color}
          setColor={setColor}
        />
      </div>
  </div>
  );
}

export default App;
