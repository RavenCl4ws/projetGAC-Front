import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-page-article-jeu',
  templateUrl: './page-article-jeu.component.html',
  styleUrls: ['./page-article-jeu.component.scss']
})

export class PageArticleJeuComponent implements OnInit {
  nomJeu: String;
  description;
  image;
  classements;
  stores;
  plateformes;

  constructor( ) { }

  ngOnInit(): void {
    var that=this;
    var randomId=this.RandomIdGenerator(350000);

    
    // console.log("log on init randomId : "+randomId);
    // console.log(this.URLConstructor(randomId));
    $.get(this.URLConstructor(randomId),function(data){
      console.log(data);
      that.nomJeu=data.name;
      that.description=data.description_raw;
      that.image=data.background_image;
      that.plateformes=data.plateforms;
      that.stores=data.stores;
    });  
  }
  URLConstructor(randomInt){
    var URLapi="https://api.rawg.io/api";
    var selector="/games";
    var parameter="/"+250000;
    var URLGenerated=(URLapi+selector+parameter);
    console.log(URLGenerated);
    return (URLGenerated)
  }
  RandomIdGenerator(max){
    var randomInt=(Math.floor(Math.random() * Math.floor(max)));
    console.log("log random int: "+randomInt)
    return randomInt;
  }

}
