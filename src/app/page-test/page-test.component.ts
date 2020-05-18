import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-page-test',
  templateUrl: './page-test.component.html',
  styleUrls: ['./page-test.component.scss']
})
export class PageTestComponent implements OnInit {
  nom="coucou";
  status="statu pas implanté";
  registerForm: FormGroup;
   
 vartest= "valeur1";
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
          var messageInscription = params["message"];
          alert(messageInscription); // Print the parameter to the console. 
      });}

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
      });  
  }

  

  
  onSubmit(){
    console.log("coucou onsubmit");
    $("#formulaire").submit(function(e){ // On sélectionne le formulaire par son identifiant
      console.log("in fonction submit");
      e.preventDefault();// Le navigateur ne peut pas envoyer le formulaire
      console.log("before donnee");
      console.log($(this));
      var donnees = $(this).serialize(); // On créer une variable content le formulaire sérialisé
      console.log(donnees);
      $.post(
        'http://localhost:8080/projetGAC/TestBase',
          {"email :" : this.email,
        "nom :" : this.nom
      },
          fonctionRetour,
          'json'        
      );
      function fonctionRetour(texte_recu){
        // Du code pour gérer le retour de l'appel AJAX.
    }
      console.log("coucou apres onsubmit");
  });
  
  }
}

    
  


