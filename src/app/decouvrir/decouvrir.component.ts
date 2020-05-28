import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decouvrir',
  templateUrl: './decouvrir.component.html',
  styleUrls: ['./decouvrir.component.scss'],
  template: 
  '<app-page-article-jeu idJeu="22509"></app-page-article-jeu>'
})
export class DecouvrirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var randomId=this.RandomIdGenerator(350000);
  }
  URLConstructor(randomInt){
    var URLapi="https://api.rawg.io/api";
    var selector="/games";
    var parameter="/"+41494 ;
    //41494 
    //22509 minecraft
    var URLGenerated=(URLapi+selector+parameter);
    // console.log(URLGenerated);
    return (URLGenerated)
  };
  RandomIdGenerator(max){
    var randomInt=(Math.floor(Math.random() * Math.floor(max)));
    // console.log("log random int: "+randomInt)
    return randomInt;
  }
}
