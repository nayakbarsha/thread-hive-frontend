import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import {faCommentDots,faPlus,faBell,faUser} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  imports: [RouterModule,SHARED_IMPORTS],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faCommentDots = faCommentDots;
  faPlus = faPlus;
  faBell = faBell;
  faUser = faUser;
}
