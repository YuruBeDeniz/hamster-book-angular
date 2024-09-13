import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRowComponent } from "../profile-row/profile-row.component";

@Component({
  selector: 'app-proposals',
  standalone: true,
  imports: [CommonModule, ProfileRowComponent],
  templateUrl: './proposals.component.html',
  styleUrl: './proposals.component.scss'
})
export class ProposalsComponent {
  names = ['Marius', 'Franziska', 'Josephine', 'Patrick'];
  texts = ['2 Jahre alt', 'Gräbt gerne Löcher', 'Spielt gerne', 'Hamsterrad-Freak'];
  images = [    
    'hamster5.jpg',
    'hamster6.jpg',
    'hamster7.jpg', 
    'hamster8.jpg', 
  ];
}
