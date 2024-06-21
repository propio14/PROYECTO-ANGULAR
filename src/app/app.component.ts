import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import FooterComponent from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi-Primer-Proyecto-Angular1';

 
}
