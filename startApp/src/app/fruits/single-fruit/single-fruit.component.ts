import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-fruit',
  standalone: true,
  imports: [],
  templateUrl: './single-fruit.component.html',
  styleUrl: './single-fruit.component.scss',
})
export class SingleFruitComponent {
  @Input() fruit = {
    name: 'Banane',
    img: 'banana.png',
    description:
      'Bananen können bis zu 30 Zentimeter lang werden. Im reifen Zustand ist die Schale dick und gelb und lässt sich leicht abziehen. Das cremige bis gelbe Fruchtfleisch ist zunächst fest und stärkehaltig.',
    genus:
      'Bananengewächse (Musaceae) innerhalb der Einkeimblättrigen Pflanzen (Monokotyledonen)',
    stars: 3.8,
    reviews: [
      { name: 'Waldemar W.', text: 'gut für Obstsalat' },
      { name: 'Olaf P.', text: 'Kann man mal machen' },
    ],
  };
}
