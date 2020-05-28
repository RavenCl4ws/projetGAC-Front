import { Component, OnInit, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import { EventEmitter } from 'protractor';
import { templateJitUrl } from '@angular/compiler';
import { Router } from '@angular/router';  

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
	template: 'status:{{status}}	page:{{page}}'
})
export class CarouselComponent implements OnInit {
	// INPUTS

	@Input() status: string;
	@Input() page: string;


	// Paramètre pour URL trending

	dates: number;              //FORMAT DATE A REVOIR (2020-0o3-0o3 non accepté par l'api)

	// Info reçues du profil

	nomJeuProfil: string;

	// Paramètres jeu (Inutile)

	nomJeu: String;
	description;
	image;
	classements;
	stores;
	plateformes;
	
	// tableau jeux

	arrayJeuxAffiche = [];
	// arrayJeuxTrend = [];

	constructor(
				private router: Router,
				) { }

	ngOnInit(): void {
		var that = this;
		var randomId = this.RandomIdGenerator(350000);
		this.dates = 2020;
		
		
		// REQUETES
console.log(this.status);

		if (this.page == "accueil" && this.status == "connecte") {
			console.log("début du if");
			$.get(this.URLConstructorSugg(this.nomJeuProfil), function (data) {
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
		}

		else if (this.page == "accueil" && this.status == "") {
			console.log("début du else if");
			$.get(this.URLConstructorTrending(this.dates), function (data) {
				let arrayJeuxTrendRecu = [];
				for (var i = 0; i < 5; i++) {
					arrayJeuxTrendRecu.push(data.results[i]);
				}
				console.log(arrayJeuxTrendRecu);
				arrayJeuxTrendRecu.forEach(element => {
					console.log("l'id du jeu:"+element.id)
					let jeuxTrend = {idJeuDisplayed:element.id, nomJeu: element.name, dateSortie: element.released, plateformes: element.parent_platforms, image: element.background_image };
					that.arrayJeuxAffiche.push(jeuxTrend);
					console.log(that.arrayJeuxAffiche);
				});
			})
		}
	}

	// CONSTRUCTEURS D'URL

	URLConstructorSugg(nomJeuProfil) {

		this.nomJeuProfil = "Minecraft";                                 // a récuperer (GENRES) !
		var URLapi = "https://api.rawg.io/api";
		var selector = "/games";
		var parameter = "/" + this.nomJeuProfil + "/suggested";
		var URLGenerated = (URLapi + selector + parameter);
		return (URLGenerated)
	}

	URLConstructorTrending(dates) {
		var URLapi = "https://api.rawg.io/api";
		var selector = "/games";
		var parameter = "?dates=" + this.dates + ",2020-10-10&ordering=-added";
		var URLGenerated = (URLapi + selector + parameter);
		console.log(URLGenerated);
		return (URLGenerated)
	}

	goToPage(idJeuDisplayed) {
		console.log("l'id recu dans gotoPAge:"+idJeuDisplayed)
		localStorage.setItem('idJeu',idJeuDisplayed),
		this.router.navigate(['/page-article-jeu'], { queryParams: { idJeu: idJeuDisplayed } });
	  }

	RandomIdGenerator(max) {
		var randomInt = (Math.floor(Math.random() * Math.floor(max)));
		console.log("log random int: " + randomInt)
		return randomInt;
	}


}


