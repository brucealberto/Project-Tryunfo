import React from 'react';
import './inputs.css';

export default class Inputs extends React.Component {
  render() {
    return (
      <form className="form">
        <label htmlFor>
          Nome:
          <input type="text" name="nome" id="nome" data-testid="name-input" />
        </label>

        <label htmlFor="descri">
          Descrição:
          <textarea data-testid="description-input" name="descri" id="descri">
            exemplo textarea
          </textarea>
        </label>

        <label htmlFor="attr1">
          Attr01:
          <input
            type="number"
            name="attr01"
            data-testid="attr1-input"
            id="attr1"
          />
        </label>

        <label htmlFor="attr2">
          Attr02:
          <input
            type="number"
            name="attr02"
            data-testid="attr2-input"
            id="attr2"
          />
        </label>

        <label htmlFor="attr3">
          Attr03:
          <input
            type="number"
            name="attr03"
            data-testid="attr3-input"
            id="attr3"
          />
        </label>

        <label htmlFor="imagem">
          Imagem:
          <input
            type="text"
            name="imagem"
            data-testid="image-input"
            id="imagem"
          />
        </label>

        <label htmlFor="raridade">
          Raridade:
          <select data-testid="rare-input" id="raridade">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>

        <label htmlFor="checkbox">
          <input
            type="checkbox"
            name="super-trybe-tryunfo"
            data-testid="trunfo-input"
            id="checkbox"
          />
          Super Trybe Trunfo
        </label>

        <button type="button" name="salvar" data-testid="save-button">
          Salvar
        </button>
      </form>
    );
  }
}
