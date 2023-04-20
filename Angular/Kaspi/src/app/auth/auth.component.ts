import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  logged: boolean = false
  username: string = '';
  password: string = '';

  constructor(private router :Router, private authService: AuthService) {
  }
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
  }

  onSubmit():void{
    this.authService.login(this.username, this.password).subscribe((token)=>{
      localStorage.setItem('token', token.token);
      this.logged = true
      this.router.navigate(['/home']);
      this.username = '';
      this.password = '';
    }) 
  }
  logout() {
    localStorage.removeItem('token');
    this.logged = false;
  }
}
