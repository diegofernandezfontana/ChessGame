import React, { Component } from 'react';

import { Wrapper } from './Styles';

function Square(props) {
  const { children, backgroundColor } = props;

  return <Wrapper backgroundColor={backgroundColor}>{children}</Wrapper>;
}

export default Square;
