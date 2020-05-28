import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login';
import { AuthService } from '../services/auth.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Component({
  selector: 'app-encart-profil',
  templateUrl: './encart-profil.component.html',
  styleUrls: ['./encart-profil.component.scss']
})
export class EncartProfilComponent implements OnInit {

  model: Login = { userid: "admin", password: "admin" };
  loginForm: FormGroup;
  submitted = false;
  message: string;
  returnUrl: string;

  url = "http://localhost:8080/projetGAC/ConnexionUtilisateur";
  coupleUserMdp;
  reponse;
  userConnecte: User;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }



  ngOnInit(): void {
  this.loginForm = this.formBuilder.group({
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
    this.submitted = true;
    // stop here if form is invalid  
    if (this.loginForm.invalid) {
      return;
    }
    else {  //CHANGER CETTE PARTIE AVEC LA REQUETE AU SERVLET
      this.coupleUserMdp = { pseudo: this.f.userid.value, motPasse: this.f.password.value }
      this.http.post(this.url, this.coupleUserMdp, { responseType: 'json' }).toPromise().then((data) => {

        this.reponse = data;
        console.log("this.reponse.id:"+this.reponse.id);
        console.log("la reponse:" + this.reponse);
        if (this.reponse == "texteErreur") {
          this.router.navigate(['/authentification']);
          this.message = "Please check your userid and password";

        }
        else {
         
          console.log("Login successful");
          console.log("this.reponse.id:"+this.reponse.id);
          //this.authService.authLogin(this.model);  
         
          localStorage.setItem('isLoggedIn', "true");
          //localStorage.setItem('token', this.f.userid.value)
          localStorage.setItem('pseudo', this.reponse.pseudo);
          localStorage.setItem('idUser',this.reponse.id);

          this.router.navigate([this.returnUrl]);
        }


      })

    }
  }
}

