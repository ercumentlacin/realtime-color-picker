import { useState } from 'react';
import { send } from '../../socketApi';

function Palette({ activeColor }) {
  const [color, setColor] = useState('#000000');

  const handleChangeColor = ({ target }) => setColor(target.value);
  const handleSendColor = () => send(color);

  return (
    <div className='palette'>
      <input type='color' value={activeColor} onChange={handleChangeColor} />
      <button onClick={handleSendColor}>Click</button>
    </div>
  );
}

export default Palette;
