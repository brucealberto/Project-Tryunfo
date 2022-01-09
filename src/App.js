import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textName: '',
      textDescription: '',
      textImage: '',
      textAttr1: '',
      textAttr2: '',
      textAttr3: '',
      textRare: '',
      textTrunfo: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  render() {
    const {
      textName,
      textDescription,
      textImage,
      textAttr1,
      textAttr2,
      textAttr3,
      textRare,
      textTrunfo,
    } = this.state;
    return (
      <div>
        <Form cardName={ textName } onInputChange={ this.onInputChange } />
        <Card
          cardName={ textName }
          cardDescription={ textDescription }
          cardImage={ textImage }
          cardAttr1={ textAttr1 }
          cardAttr2={ textAttr2 }
          cardAttr3={ textAttr3 }
          cardRare={ textRare }
          cardTrunfo={ textTrunfo }
        />
      </div>
    );
  }
}

export default App;
