import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamster-card',
  standalone: true,
  imports: [],
  templateUrl: './hamster-card.component.html',
  styleUrl: './hamster-card.component.scss'
})
export class HamsterCardComponent {
  @Input() text: string = ''
  @Input() img: string = ''

}
