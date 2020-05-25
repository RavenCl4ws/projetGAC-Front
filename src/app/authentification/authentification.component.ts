import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { Login } from 'src/app/interfaces/login';  
import { AuthService } from '../services/auth.service'  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { HttpClient } from '@angular/common/http';
import { User } from '../user';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  model: Login = { userid: "admin", password: "admin" } ;
  loginForm: FormGroup;  
  submitted=false;
  message: string;  
  returnUrl: string;  

  url="http://localhost:8080/projetGAC/ConnexionUtilisateur";
  coupleUserMdp;
  reponse;
  userConnecte:User;

  constructor(
    private http:HttpClient,  
    private formBuilder : FormBuilder,  
    private router : Router,  
    private authService : AuthService  
 ) { }  
 


  ngOnInit(): void {this.loginForm = this.formBuilder.group({  
    userid: ['', Validators.required],  
    password: ['', Validators.required]  
 });  
this.returnUrl = '/profil';  
this.authService.logout();  
  }

  // convenience getter for easy access to form fields  
get f() { return this.loginForm.controls; }  

login() {  
  console.log(this.loginForm.value);
  this.submitted=true;
  // stop here if form is invalid  
  if (this.loginForm.invalid) {  
     return;  
  }  
  else {  //CHANGER CETTE PARTIE AVEC LA REQUETE AU SERVLET
    this.coupleUserMdp={pseudo:this.f.userid.value,motPasse:this.f.password.value}
    this.http.post(this.url,this.coupleUserMdp,{responseType:'json'}).toPromise().then((data:string) =>{
       
      this.reponse=data;
    
      console.log(this.reponse);
      
  })
     if (this.reponse =="texteErreur") {  
       this.message = "Please check your userid and password";
          
     }  
  else {  
    console.log("Login successful");  
        //this.authService.authLogin(this.model);  
        localStorage.setItem('isLoggedIn', "true");  
        localStorage.setItem('token', this.f.userid.value);  
        this.router.navigate([this.returnUrl]);  
     }  
    }  
  }  
}
