import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { HamsterCardComponent } from "./hamster-card/hamster-card.component";
import { ProposalsComponent } from "./proposals/proposals.component";
import { FriendBoxComponent } from "./friend-box/friend-box.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, HamsterCardComponent, ProposalsComponent, FriendBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  postTexts = [
    'Hallo, mein Name ist Frederick! Ich bin hier, um neue Freunde zu treffen!',
    'Hallo zusammen. Freut mich, dass ihr hier seid!!',
    'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt',
    'Ich esse gerne Kekse.'
  ];

  postImages = [
    'hamster1.jpg',
    'hamster2.jpg',
    'hamster3.jpg',
    'hamster4.jpg',
  ];
}
