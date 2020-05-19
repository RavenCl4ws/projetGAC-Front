import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {

  // constructor(private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.queryParams.subscribe(params => {
  //         var messageInscription = params["message"];
  //         alert(messageInscription); // Print the parameter to the console. 
  //     });}

  ngOnInit(): void {
  }

}
