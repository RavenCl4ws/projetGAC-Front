import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import {User} from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrls: ['./page-inscription.component.scss']
})
export class PageInscriptionComponent implements OnInit {
  registerForm: FormGroup;
  url="http://localhost:8080/projetGAC/InscriptionUtilisateur";
  userAEnvoyer=new User("","","","","","","","")
  submited=false;
  reponse;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
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
