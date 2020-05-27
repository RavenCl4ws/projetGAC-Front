import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss'],
  template:
    '<app-carousel page="accueil" status="connecte"></app-carousel>'
})
export class AccueilComponent implements OnInit {

  status: string;
  
  constructor(private activatedRoute: ActivatedRoute) {
    // this.activatedRoute.queryParams.subscribe(params => {
    //       var messageInscription = params["message"];
    //       alert(messageInscription); // Print the parameter to the console. 
    // });
  }

  ngOnInit(): void {
    
    this.status = "";

    if (localStorage.getItem('isLoggedIn') == "true") {
      this.status = "connecte";
    }
    else {
      this.status = "";
    }

  }

}
