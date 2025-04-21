import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { faCommentDots, faCircleInfo, faFire, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule,SHARED_IMPORTS],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  isOpen = signal(true);

  toggleSidebar() {
    this.isOpen.set(!this.isOpen());
  }

  faSatelliteDish = faCommentDots;
  faCircleInfo = faCircleInfo;
  faFire=faFire;
  faHouse=faHouse;
}