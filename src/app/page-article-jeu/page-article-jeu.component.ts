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
  galerie={};
  classements;
  myArrStores=[];
  plateformes={};
  trailer;
  createurs={};

  constructor( ) { }

  ngOnInit(): void {
    var that=this;
    var randomId=this.RandomIdGenerator(350000);

    
    // console.log("log on init randomId : "+randomId);
    // console.log(this.URLConstructor(randomId));
    $.get(this.URLConstructor(randomId),function(data){
      // console.log(data);
      that.nomJeu=data.name;
      that.description=data.description_raw;
      that.image=data.background_image;
      that.plateformes=data.plateforms;
      // console.log("plateformes: "+that.plateformes)

      let arrayStoreRecu=data.stores;
      console.log(arrayStoreRecu);
      // for(let i=0; i<sizeArrayStore;i++)
      arrayStoreRecu.forEach(element => 
      {
        console.log("avec this: "+element.store.name);
        console.log("sans this: "+element.store.name);
        let store={nomStore:element.store.name,urlProduit:element.url};
        console.log(store);
        that.myArrStores.push(store);
        console.log(that.myArrStores)
      });
     console.log("apres for")
      // console.log("stores: "+that.stores)

    });  
  }
  URLConstructor(randomInt){
    var URLapi="https://api.rawg.io/api";
    var selector="/games";
    var parameter="/"+41494;
    //41494
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
