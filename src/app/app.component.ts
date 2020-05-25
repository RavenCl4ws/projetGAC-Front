import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  id;
  title = 'projetGAC';
  ngOnInit(): void {
    this.id = localStorage.getItem('token');
    console.log(this.id);
  }
  
  
}
