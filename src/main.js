import {RenderPosition, render} from './render.js';
import Filter from './view/trip-filters-view.js';
import Trip from './presenter/trip-events-presenter.js';

const filterContainer = document.querySelector('.trip-controls__filters');
const tripContainer = document.querySelector('.trip-events');
const tripPresenter = new Trip({container: tripContainer});

render(new Filter(), filterContainer, RenderPosition.BEFOREEND);
tripPresenter.init();
