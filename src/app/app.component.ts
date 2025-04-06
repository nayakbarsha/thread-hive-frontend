import { Component} from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, CommonModule, SidebarComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ThreadHive';
  constructor(private router:Router){}

  isAuthPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/signup';
  }
}
