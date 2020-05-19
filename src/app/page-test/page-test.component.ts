import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import {User} from '../user';
import { Observable } from 'rxjs';
  

@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.scss']
})
export class PageTestComponent implements OnInit {
  nom2="coucou";
  status="statu pas implanté";
  registerForm: FormGroup;
  postData={test:"myContent",age:8};
  url="http://localhost:8080/projetGAC/TestBase";
  Varjson="marche pas";
 vartest= "valeur1";

 userAEnvoyer=new User("","","","","","","","")
//  nom : String;
//  prenom : String;
//  email : String;
//  pseudo : String;
//  motPasse : String;
//  dateNaissance : Date;
//  pays : String;
//  numeroTel : String;
submited=false;
 reponse;

//  tableauAEnvoyer=[this.prenom,this.nom,this.mail,this.pseudo,this.motPasse,this.dateNaissance,this.pays,this.numeroTel];
  // constructor(private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.queryParams.subscribe(params => {
  //         var messageInscription = params["message"];
  //         alert(messageInscription); // Print the parameter to the console. 
  //     });}
      constructor(private http:HttpClient){}
      //   var that=this;
      //   this.http.post(this.url,that.postData).toPromise().then((data:any) =>{
      //     console.log(data);
      //     console.log(data.test);
      //     this.Varjson=(data.test);
      //     console.log(this.Varjson);
      //   });
      // }
  ngOnInit(): void {
    this.vartest="val2";
    var that=this;
    
    $.get("http://localhost:8080/projetGAC/test",function(data){
        // console.log(data);
        
        var tab=JSON.parse(data);
       
        console.log(tab);
        console.log(that.nom2);
        console.log(tab.count);
        console.log(tab.results[0].name);
        that.nom2= ("Nom Jeu top 1: "+tab.results[0].name);
      });  
  }
  functionSubmit(userAEnvoyer){
   console.log(userAEnvoyer);
    this.http.post(this.url,userAEnvoyer,{responseType:'text'}).toPromise().then((data:string) =>{
      
      this.reponse=data;
      console.log(this.reponse);
      this.submited=true;
  })
    // .subscribe(res : any => {
    //   console.log(res)
    //   })
      
}
  
    // onSubmit(){
    //   this.http.post(this.url,this.postData).toPromise().then((data:any) =>{
    //     console.log(data);
    //     console.log(data.test);
    //     this.Varjson=(data.test);
    //     console.log(this.Varjson);
    //     console.log(this.mail);
    //   })};
    


  
  // onSubmit(){
  //   console.log("coucou onsubmit");
  //   $("#formulaire").submit(function(e){ // On sélectionne le formulaire par son identifiant
  //     console.log("in fonction submit");
  //     e.preventDefault();// Le navigateur ne peut pas envoyer le formulaire
  //     console.log("before donnee");
  //     console.log($(this));
  //     var donnees = $(this).serialize(); // On créer une variable content le formulaire sérialisé
  //     console.log(donnees);
  //     $.post(
  //       'http://localhost:8080/projetGAC/TestBase',
  //         {"email :" : this.email,
  //       "nom :" : this.nom
  //     },
  //         fonctionRetour,
  //         'json'        
  //     );
  //     function fonctionRetour(texte_recu){
  //       // Du code pour gérer le retour de l'appel AJAX.
  //   }
  //     console.log("coucou apres onsubmit");
  // });
  
  // }
}

    
  


