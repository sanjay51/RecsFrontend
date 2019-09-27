import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

}

export class Card {
  title: string;
  text: string;

  constructor(title: string, text: string) {
    this.text = text;
    this.title = title;
  }
}