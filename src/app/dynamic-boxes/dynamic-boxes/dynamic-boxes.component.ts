import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dynamic-boxes',
  templateUrl: './dynamic-boxes.component.html',
  styleUrls: ['./dynamic-boxes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DynamicBoxesComponent implements OnInit {

  @Input() count: number;
  boxes = [];
  counter: number = 1;
  imageDisplayMap = new Map();
  randomImageMap = [{ imageUrl: 'assets/panda.jpg' },
  { imageUrl: 'assets/cheetah.jpg' },
  { imageUrl: 'assets/cow.jpg' },
  { imageUrl: 'assets/deer.jpg' },
  { imageUrl: 'assets/elephant.jpg' },
  { imageUrl: 'assets/goat.jpg' },
  { imageUrl: 'assets/kangaroo.jpg' },
  { imageUrl: 'assets/kitten.jpg' },
  { imageUrl: 'assets/lion.jpg' },
  { imageUrl: 'assets/monkey.jpg' },
  { imageUrl: 'assets/parrot.jpg' },
  { imageUrl: 'assets/peacock.jpg' },
  { imageUrl: 'assets/puppy.jpg' },
  { imageUrl: 'assets/rabbit.jpg' },
  { imageUrl: 'assets/tiger.jpg' },
  { imageUrl: 'assets/zebra.jpg' }
  ];

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIcon('delete', domSanitizer.bypassSecurityTrustResourceUrl('./assets/Delete.svg'));
  }

  ngOnInit() {
    for (let box = 1; box <= this.count; box++) {
      this.boxes.push({ id: box, showImage: false, imageUrl: this.randomImageMap[Math.floor(Math.random() * 15) + 1]['imageUrl'] });
      this.imageDisplayMap.set(box, false);
    }
  }

  boxClicked(boxId) {
    if (boxId >= this.counter && !this.imageDisplayMap.get(this.counter)) {
      this.imageDisplayMap.set(this.counter, true);
      this.boxes.forEach(item => {
        if (item.id === this.counter) {
          item.showImage = true;
        }
      });
      this.counter++;
    }
  }

  deleteButtonClicked(index, boxId) {
    this.boxes.forEach(item => {
      if (item.id > boxId) {
        item.id = item.id - 1;
      }
    });
    this.boxes.splice(index, 1);
    this.counter--;
    this.boxes.push({ id: this.boxes.length + 1, showImage: false, imageUrl: this.randomImageMap[Math.floor(Math.random() * 15) + 1]['imageUrl'] });
    this.imageDisplayMap.set(this.counter, false);
  }
}
