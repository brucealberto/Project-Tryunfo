import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stateName: '',
      stateDescription: '',
      stateImage: '',
      stateAttr1: '0',
      stateAttr2: '0',
      stateAttr3: '0',
      stateRare: '',
      stateTrunfo: false,
      isSaveButtonDisabled: true,
      savelist: [],
      hasTrunfo: false,
    };
  }

  handleValidation = () => {
    const {
      stateName,
      stateDescription,
      stateImage,
      stateAttr1,
      stateAttr2,
      stateAttr3,
      stateRare,
      // stateTrunfo,
      // isSaveButtonDisabled,
      // hasTrunfo
    } = this.state;
    this.setState({
      isSaveButtonDisabled:
        this.handleInputValidation(
          stateName,
          stateDescription,
          stateImage,
          stateRare,
        ) || this.handleSum(stateAttr1, stateAttr2, stateAttr3),
    });
  };

  handleInputValidation = (
    stateName,
    stateDescription,
    stateImage,
    stateRare,
  ) => {
    if (
      stateName !== ''
      && stateDescription !== ''
      && stateImage !== ''
      && stateRare !== ''
    ) {
      return false;
    }
    return true;
  };

  handleSum = (stateAttr1, stateAttr2, stateAttr3) => {
    const maxSum = 210;
    const maxNumber = 90;
    if (
      Number(stateAttr1) + Number(stateAttr2) + Number(stateAttr3) <= maxSum
      && Number(stateAttr1) <= maxNumber
      && Number(stateAttr2) <= maxNumber
      && Number(stateAttr3) <= maxNumber
      && Number(stateAttr1) >= 0
      && Number(stateAttr2) >= 0
      && Number(stateAttr3) >= 0
    ) {
      return false;
    }
    return true;
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.handleValidation);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      const {
        stateName,
        stateDescription,
        stateImage,
        stateAttr1,
        stateAttr2,
        stateAttr3,
        stateRare,
        stateTrunfo,
      } = this.state;
      return {
        savelist: [
          ...prevState.savelist,
          {
            stateName,
            stateDescription,
            stateImage,
            stateAttr1,
            stateAttr2,
            stateAttr3,
            stateRare,
            stateTrunfo,
          },
        ],
        stateName: '',
        stateDescription: '',
        stateImage: '',
        stateAttr1: '0',
        stateAttr2: '0',
        stateAttr3: '0',
        stateRare: '',
        hasTrunfo: prevState.stateTrunfo,
        stateTrunfo: false,
      };
    });
  };

  render() {
    const {
      stateName,
      stateDescription,
      stateImage,
      stateAttr1,
      stateAttr2,
      stateAttr3,
      stateRare,
      stateTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
    } = this.state;
    return (
      <div>
        <Form
          cardName={ stateName }
          cardDescription={ stateDescription }
          cardImage={ stateImage }
          cardAttr1={ stateAttr1 }
          cardAttr2={ stateAttr2 }
          cardAttr3={ stateAttr3 }
          cardRare={ stateRare }
          cardTrunfo={ stateTrunfo }
          hasTrunfo={ hasTrunfo }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ stateName }
          cardDescription={ stateDescription }
          cardImage={ stateImage }
          cardAttr1={ stateAttr1 }
          cardAttr2={ stateAttr2 }
          cardAttr3={ stateAttr3 }
          cardRare={ stateRare }
          cardTrunfo={ stateTrunfo }
        />
      </div>
    );
  }
}

export default App;
