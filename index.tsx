import React, { useState } from 'react';
import { render } from 'react-dom';
import { Input, Typography } from 'antd';
import './style.css';
import { HelloComponent } from './Hello';

const { Text } = Typography;

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const helloProps = {
    name: inputValue,
    styles:{ 
      strong: true,
      underline: true,
     }
  };
  return (
    <React.Fragment>
      <Input
        value={inputValue}
        onChange={(e)=> setInputValue(e.target.value)}
      />
      <br/>
      <br/>
      <HelloComponent {...helloProps}/>
    </React.Fragment>
    
  )

};

render(<App />, document.getElementById('root'));
