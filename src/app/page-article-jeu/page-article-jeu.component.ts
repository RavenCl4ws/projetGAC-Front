import { Component, OnInit} from '@angular/core';
// import * as $ from 'jquery';
declare var $ : any;
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute  } from '@angular/router';  

// import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-page-article-jeu',
  templateUrl: './page-article-jeu.component.html',
  styleUrls: ['./page-article-jeu.component.scss'],
  template:'idJeu:{{randomId}}'
})

export class PageArticleJeuComponent implements OnInit {
 
  
  connecte:boolean=false;
  show=false;
  idJeuRequete;

  // mySubscription:any;
  nomJeu: String; // à envoyer au servlet
  genrePrincipal; // à envoyer au servlet
  notePerso; // à envoyer au servlet
  noteMetacritic; //si pas note moyenne mettre celle-ci
  noteMoyenne; // recevoir du servlet
  description;
  image;
  // galerie={};
  // classements;
  myArrStores=[];
  myArrPlateformes=[];
  myArrLogosPlateformes=[];
  myArrDev=[];
  myArrGenres=[];
  dateSortie;
  noteMeta;
  myClip;
  pasVideo;
  // trailer;
  // createurs={};
retourAjoutJeu="avant reponse java";
retourAjoutNote="avant reponse java";
ToastNote:boolean;
ToastAdd:boolean;
arrayJeuxAffiche=[];
  constructor( 
              private http: HttpClient, 
              private router: Router,
              // private route: ActivatedRoute
              ){
            
             }

  ngOnInit(): void {
    var that=this;
    // var randomId=this.RandomIdGenerator(350000);
    if(localStorage.getItem('isLoggedIn')=='true'){
      this.connecte=true;
    }else{this.connecte=false};


    this.idJeuRequete=localStorage.getItem('idJeu')

    

      $.get(this.URLConstructor(this.idJeuRequete),function(data){
      console.log(data);

      that.nomJeu=data.name;
      that.onInitNoteMoyenne();
      that.onInitNotePerso();

      that.description=data.description_raw;
      that.image=data.background_image;
     
      // console.log("plateformes: "+that.plateformes)


//NOTE METACRITIC
      that.noteMeta=data.metacritic;

//CLIP
      if (data.clip==null){
        that.pasVideo=true;
      }
      else{
      that.myClip=data.clip.clip;
      console.log("COUCOU CLIP:"+that.myClip);}
      // if(that.myClip)
      // console.log(that.myClip)

//GENRE
      let arrayGenreRecu=data.genres;
      arrayGenreRecu.forEach(element => 
        {
          let genre={nomGenre:element.name};
          // console.log(dev);
          that.myArrGenres.push(genre);
          // console.log(that.myArrDev)
        });
        that.genrePrincipal=arrayGenreRecu[0].name;

// DEVELOPPEURS
      let arrayDevRecu=data.developers;
      arrayDevRecu.forEach(element => 
        {
          let dev={nomDeveloppeur:element.name};
          // console.log(dev);
          that.myArrDev.push(dev);
          // console.log(that.myArrDev)
        });
// STORES
      let arrayStoreRecu=data.stores;
      // console.log(arrayStoreRecu);
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
      // console.log(arrayPlatRecu);
      arrayPlatRecu.forEach(element => 
      {
        let plateforme={nomPlateforme:element.platform.name};
        that.dateSortie=element.released_at;
        // console.log(plateforme);
        that.myArrPlateformes.push(plateforme);
        // console.log(that.myArrPlateformes)
      });
      //logo plateformes
      let arrayPlatMereRecu=data.parent_platforms;
      // console.log(arrayPlatMereRecu);
      arrayPlatMereRecu.forEach(element => 
        {
          let logoPlateforme;
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
        let plateforme={nomPlateforme:element.platform.name,logoPlateforme:logoPlateforme}
        that.myArrLogosPlateformes.push(plateforme);
      });
      var nomJeuSansEspace=that.nomJeu.split(' ').join('-')
 //JEUX SUGGERES
      $.get(that.URLConstructorSugg(nomJeuSansEspace), function (data) {
				console.log(data);
				let arrayJeuxSuggRecu = data.results;
				console.log(arrayJeuxSuggRecu);
				arrayJeuxSuggRecu.forEach(element => {
					console.log("l'id du jeu:"+element.id)
					let jeuxSugg = {idJeuDisplayed:element.id, nomJeu: element.name, description: element.short_description, plateformes: element.parent_platforms, image: element.background_image };
					that.arrayJeuxAffiche.push(jeuxSugg);
					console.log(that.arrayJeuxAffiche);
				});
			})

      });  

      
    
    
  }
  onInitNoteMoyenne(){
    
    var requeteNoteMoyenne={nomJeu:this.nomJeu}
    this.http.post("http://localhost:8080/projetGAC/CalculNoteMoyenneJeu", requeteNoteMoyenne, { responseType: 'json' }).toPromise().then((data:any) => {
      var reponse = data;
      this.noteMoyenne=reponse.noteMoyenne;
      // console.log("la reponse oninitNoteMoyenne:" + reponse);
  });
  }
  onInitNotePerso(){
    var requeteNotePerso={nomJeu:this.nomJeu,userId:localStorage.getItem('idUser')}
    this.http.post("http://localhost:8080/projetGAC/LectureNoteUtilisateur", requeteNotePerso, { responseType: 'json' }).toPromise().then((data:any) => {
      var reponse = data;
      this.notePerso=reponse.note;
      // console.log("la reponse onInitNotePerso:" + reponse);
  });
  }
  onClickAdd(){
    var infoJeu={userId:localStorage.getItem('idUser'),nomJeu:this.nomJeu,genre:this.genrePrincipal}
    console.log(infoJeu)
    this.http.post("http://localhost:8080/projetGAC/AjoutJeuListeJeuxPossedes", infoJeu, { responseType: 'text' }).toPromise().then((data: string) => {
       this.retourAjoutJeu = data;
      console.log("la reponse:" + this.retourAjoutJeu);
      this.displayToastAdd();
      location.reload();
  });
  
  }
  onClickRate(note){
    if(note<0){
      this.router.navigate(['/authentification']);
    }else{
    let infoNote={userId:localStorage.getItem('idUser'),nomJeu:this.nomJeu,notePerso:note}
    console.log(infoNote);
    this.http.post("http://localhost:8080/projetGAC/AjoutNoteUtilisateur", infoNote, { responseType: 'text' }).toPromise().then((data: string) => {
       this.retourAjoutNote = data;
      console.log("la reponse:" + this.retourAjoutNote);
      this.displayToastNote();
      location.reload();
  });
    }
  // this.afficheNote();
  }
  // afficheNote(){

  // };
  URLConstructor(idJeu){
    var URLapi="https://api.rawg.io/api";
    var selector="/games";
    var parameter="/"+idJeu ;
    //41494 
    //22509 minecraft
    var URLGenerated=(URLapi+selector+parameter);
    // console.log(URLGenerated);
    return (URLGenerated)
  };
  URLConstructorSugg(nomJeuProfil) {

		// this.nomJeuProfil = this.nomJeu;                                 // a récuperer (GENRES) !
		var URLapi = "https://api.rawg.io/api";
		var selector = "/games";
		var parameter = "/" + nomJeuProfil + "/suggested";
		var URLGenerated = (URLapi + selector + parameter);
		return (URLGenerated)
	};
  // RandomIdGenerator(max){
  //   var randomInt=(Math.floor(Math.random() * Math.floor(max)));
  //   console.log("log random int: "+randomInt)
  //   return randomInt;
  // }
  displayToastNote(){
    if(this.retourAjoutNote==""){
     this.ToastNote=false;
    }
    else{this.ToastNote=true;
      $("#toastNote").toast('show');
      }
  }
  displayToastAdd(){
    console.log("coucou this.displayToastAdd")
    console.log(this.retourAjoutJeu)
    if(this.retourAjoutJeu==""){
     this.ToastAdd=false;
     console.log("le retour est vide")
    }
    else{this.ToastAdd=true;
      $(document).ready(function(){
        $("#toastAdd").toast('show');
    });
      console.log("le retour n'est pas vide, where's my toast")
    }   
  }
  goToPage(idJeuDisplayed) {
		console.log("l'id recu dans gotoPAge:"+idJeuDisplayed)
		localStorage.setItem('idJeu',idJeuDisplayed),
		location.reload();
	  }

}
