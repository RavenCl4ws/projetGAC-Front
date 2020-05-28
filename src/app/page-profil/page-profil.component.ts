import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.scss']
})
export class PageProfilComponent implements OnInit {
  nomUser;
  prenomUser;
  dateDeNaissance;
  pays;
  mailUser;
  numeroDeTel;
  pseudo;
  listeJeuxPossedes=[];
  listeNotesAttribuees=[];

  constructor(  private http: HttpClient,
                private router: Router,
                private authService: AuthService
              ) { }

  ngOnInit(): void {
    this.recupInfoProfil()
  }
  recupInfoProfil(){
    var requeteInfoProfil={userId:localStorage.getItem('idUser')}
    this.http.post("http://localhost:8080/projetGAC/ProfilUtilisateur", requeteInfoProfil, { responseType: 'json' }).toPromise().then((data:any) => {
      console.log("datarecuProfil: "+data)
    this.nomUser=data.nom;
    this.prenomUser=data.prenom;
    this.dateDeNaissance=data.dateNaissance;
    this.pays=data.pays;
    this.mailUser=data.mail;
    this.numeroDeTel=data.numeroTel;
    this.pseudo=data.pseudo;
    console.log(data.listeJeux);
    this.listeJeuxPossedes=data.listeJeux;  
    console.log(this.listeJeuxPossedes);
  });
  }
  
  logout() {  
    console.log('logout');  
    this.authService.logout();  
    this.router.navigate(['/authentification']);  
  }  
}
