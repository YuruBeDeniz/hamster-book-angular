import { Component, Input } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-profile-row',
  standalone: true,
  imports: [],
  templateUrl: './profile-row.component.html',
  styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent {
  @Input() name = 'Frederick';
  @Input() img = 'hamster1.jpg';
  @Input() description = '3 Jahre alt';

  constructor(public fs: FriendService) {}
}
