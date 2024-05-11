import { Component } from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,NavBarComponent,RouterModule,  HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';
}
