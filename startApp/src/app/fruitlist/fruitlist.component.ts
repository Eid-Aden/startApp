import { CommonModule } from '@angular/common';
import { Component, inject, ɵɵngDeclareInjectable } from '@angular/core';
import { SingleFruitComponent } from '../fruits/single-fruit/single-fruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SingleFruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss',
})
export class FruitlistComponent {
  fruitlistdata = inject(FruitlistdataService);

  addComment(comment: string, index: number) {
    this.fruitlistdata.addCommentTofruitlist(comment, index);
  }
}
