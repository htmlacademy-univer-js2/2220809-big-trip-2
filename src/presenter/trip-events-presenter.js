import {RenderPosition, render} from '../render.js';
import Point from '../view/point-view.js';
import PointEdit from '../view/editing-point-view.js';
import PointNew from '../view/creating-point-view.js';
import Sort from '../view/trip-sort-view.js';
import TripList from '../view/trip-list.js';

class Trip {
  constructor({container}) {
    this.component = new TripList();
    this.container = container;
  }

  init() {
    render(new Sort(), this.container, RenderPosition.BEFOREEND);
    render(this.component, this.container);
    render(new PointNew(), this.component.getElement(), RenderPosition.BEFOREEND);
    render(new PointEdit(), this.component.getElement(), RenderPosition.BEFOREEND);

    for (let i = 0; i < 3; i++) {
      render(new Point(), this.component.getElement(), RenderPosition.BEFOREEND);
    }
  }
}

export default Trip;