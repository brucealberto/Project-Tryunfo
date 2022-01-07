import React from 'react';
import Inputs from './Inputs';

export default class Form extends React.Component {
  render() {
    return (
      <section>
        <h1>Adicionar nova carta</h1>
        <Inputs />
      </section>
    );
  }
}
