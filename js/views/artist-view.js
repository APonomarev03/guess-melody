import AbstractView from './abstract-view';
import {constants} from '../utils/constants';

export default class ArtistView extends AbstractView {
  constructor(data) {
    super();
    this._data = data;
  }

  get template() {
    return `
      <section class="main">
        <section class="game game--artist">
          <section class="game__screen">
            <h2 class="game__title">${this._data.question}</h2>
            <div class="game__track">
              <button class="track__button track__button--play" type="button"></button>
              <audio src="${this._data.src}"></audio>
            <form class="game__artist">
              ${this._data.answers.map((answer) => `<div class="artist">
                  <input class="artist__input visually-hidden" value="${answer.title}" type="radio" name="answer">
                  <label class="artist__block" for="answer-1">
                    <img ${constants.DEBUG && answer.isCorrect ? constants.DEBUG_STYLE : ``} class="artist__picture" src="${answer.image.url}" alt="${answer.title}">
                    <span class="artist__name">${answer.title}</span>
                  </label>
              </div>`)}
            </form>
          </section>
        </section>
      </section>`;
  }

  onButtonClick() {}
  onAnswer() {}

  bind() {
    const answerWrapper = this.element.querySelector(`.game__artist`);
    const trackButtons = this.element.querySelector(`.track__button`);
    trackButtons.addEventListener(`click`, (evt) => this.onButtonClick(evt));
    answerWrapper.addEventListener(`click`, (evt) => this.onAnswer(evt));
  }
}
