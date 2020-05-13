import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.scss']
})
export class PageTestComponent implements OnInit {
  nom="coucou";
 vartest= "valeur1";
  constructor() { }

  ngOnInit(): void {
    this.vartest="val2";
    var that=this;
    
    $.get("http://localhost:8080/projetGAC/test",function(data){
        console.log("ok");
        
        var tab=JSON.parse(data);
       
        console.log(tab);
        console.log(that.nom);
        console.log(tab.count);
        console.log(tab.results[0].name);
        that.nom= ("Nom Jeu top 1: "+tab.results[0].name);
        that.vartest
        console.log(this.nom);
      });
      
  }

}
