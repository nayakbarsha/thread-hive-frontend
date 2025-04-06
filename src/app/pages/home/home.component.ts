import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: 'app-home',
  imports: [SidebarComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor() { 
    console.log("HomeComponent instantiated")
  }
}
