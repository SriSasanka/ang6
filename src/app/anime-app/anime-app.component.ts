import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-anime-app',
  templateUrl: './anime-app.component.html',
  styleUrls: ['./anime-app.component.css']
})
export class AnimeAppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }
    logout() {
    console.log('Log out');
    this.router.navigate(['/core']);
    }
}
