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
//
submited=false;
 reponse;

      constructor(private http:HttpClient){}
  
  ngOnInit(): void {
    this.vartest="val2";
    var that=this;
    
    $.get("http://localhost:8080/projetGAC/test",function(data){
        console.log(data);
        
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
    
}

    
  
}

