import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss']
})
export class PageProfilComponent implements OnInit {
  id;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('token');
  }
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/authentification']);  
  }  
}
