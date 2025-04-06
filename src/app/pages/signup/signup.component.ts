import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink, CommonModule],
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(){
    console.log('SignupComponent created');
  }
  daysArray: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  monthsArray: String[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  yearsArray: number[] = Array.from({ length: 106 }, (_, i) => i + 1920);
}
