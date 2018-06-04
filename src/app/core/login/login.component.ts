import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    username: '',
    password: ''
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log('Form Submitted');
    console.log(form);
    this.router.navigate(['/anime/home']);
  }
}
