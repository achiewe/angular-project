import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-project';
  inputType = 'text';
  showButton = true;
  numberOfItems = 10;
  data = [
    { name: 'achi', color: 'red', taste: 'swedish' },
    { name: 'gena', color: 'green', taste: 'solo' },
    { name: 'lela', color: 'yellow', taste: 'wedish' },
  ];

  notify(text: string) {
    alert(`hello ${text}`);
  }
}
