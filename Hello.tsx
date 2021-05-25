import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;
type HelloComponentProps = {
  name: string;
  styles: {
    strong?:boolean;
    italics?:boolean;
    underline?:boolean;
  }
}
export const HelloComponent = ( props:HelloComponentProps ) =>{
  const { name, styles } = props;
  return (<Text {...styles} >Hello {name}</Text>)

}
