import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-page-article-jeu',
  templateUrl: './page-article-jeu.component.html',
  styleUrls: ['./page-article-jeu.component.scss']
})

export class PageArticleJeuComponent implements OnInit {
  nomJeu: String; // à envoyer au servlet
  genrePrincipal; // à envoyer au servlet
  notePerso; // à envoyer au servlet
  noteMetacritic; //si pas note moyenne mettre celle-ci
  noteMoyenne; // recevoir du servlet
  description;
  image;
  galerie={};
  classements;
  myArrStores=[];
  myArrPlateformes=[];
  myArrLogosPlateformes=[];
  dateSortie;
  trailer;
  createurs={};

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
     
      // console.log("plateformes: "+that.plateformes)

// STORES
      let arrayStoreRecu=data.stores;
      console.log(arrayStoreRecu);
      arrayStoreRecu.forEach(element => 
      {
        let store={nomStore:element.store.name,urlProduit:element.url};
        // console.log(store);
        that.myArrStores.push(store);
        // console.log(that.myArrStores)
      });
      //  console.log("apres for")
      // console.log("stores: "+that.stores)

//PLATEFORMS
      //listes consoles
      let arrayPlatRecu=data.platforms;
      console.log(arrayPlatRecu);
      arrayPlatRecu.forEach(element => 
      {
        let plateforme={nomPlateforme:element.platform.name};
        that.dateSortie=element.released_at;
        console.log(plateforme);
        that.myArrPlateformes.push(plateforme);
        console.log(that.myArrPlateformes)
      });
      //logo plateformes
      let arrayPlatMereRecu=data.parent_platforms;
      console.log(arrayPlatMereRecu);
      arrayPlatMereRecu.forEach(element => 
        {let logoPlateforme;
        if(element.platform.name=="PC"){
          logoPlateforme="../assets/img/logos/logo_pc.png";
        }
        else if(element.platform.name=="PlayStation"){
          logoPlateforme="../assets/img/logos/logo_playstation.png";
        }
        else if(element.platform.name=="Xbox"){
          logoPlateforme="../assets/img/logos/logo_xbox.png";
        }
        else if(element.platform.name=="Nintendo"){
          logoPlateforme="../assets/img/logos/logo_nintendo.png";
        }
        else if(element.platform.name=="iOS"||element.platform.name=="Android"){
          logoPlateforme="../assets/img/logos/logo_mobile.png";
        }
        else if(element.platform.name=="Apple Macintosh"){
          logoPlateforme="../assets/img/logos/logo_mac.png";
        }
        else{
          logoPlateforme="../assets/img/logos/logo_noIcon.png";
        }
        
        that.myArrLogosPlateformes.push(logoPlateforme);
      });

    });  
  }
  URLConstructor(randomInt){
    var URLapi="https://api.rawg.io/api";
    var selector="/games";
    var parameter="/"+22509;
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
