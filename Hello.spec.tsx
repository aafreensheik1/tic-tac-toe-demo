import React from 'react';
import { render, screen, userEvent } from '@testing-library/react';
import { HelloComponent } from './Hello';

describe('Testing Hello Component', () => {
  it('Should render Hello Component', ()=>{
    const helloProps = {
    name: 'xyz',
    styles:{ 
      strong: true,
      underline: true,
     }
  };
  render(<HelloComponent {...helloProps}/>);
  expect(screen.getByText('xyz')).toBeInTheDocument();
  })
})




