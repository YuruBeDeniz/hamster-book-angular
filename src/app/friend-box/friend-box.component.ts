import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './friend-box.component.html',
  styleUrl: './friend-box.component.scss'
})
export class FriendBoxComponent {
  constructor(public fs: FriendService) {}
}
