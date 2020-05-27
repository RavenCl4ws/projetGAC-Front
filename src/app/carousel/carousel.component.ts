import { Component, OnInit, Input, Output } from '@angular/core';
import * as $ from 'jquery';
import { EventEmitter } from 'protractor';
import { templateJitUrl } from '@angular/compiler';

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

	arrayJeuxSugg = [];
	arrayJeuxTrend = [];

	constructor() { }

	ngOnInit(): void {
		var that = this;
		var randomId = this.RandomIdGenerator(350000);
		this.dates = 2020;


		// REQUETES

		if (this.page == "accueil" && this.status == "connecte") {
			console.log("début du if");
			$.get(this.URLConstructorSugg(this.nomJeuProfil), function (data) {
				console.log(data);
				let arrayJeuxSuggRecu = data.results;
				console.log(arrayJeuxSuggRecu);
				arrayJeuxSuggRecu.forEach(element => {
					let jeuxSugg = { nomJeu: element.name, description: element.short_description, plateformes: element.parent_platforms, image: element.background_image };
					that.arrayJeuxSugg.push(jeuxSugg);
					console.log(that.arrayJeuxSugg);
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
					let jeuxTrend = { nomJeu: element.name, dateSortie: element.released, plateformes: element.parent_platforms, image: element.background_image };
					that.arrayJeuxTrend.push(jeuxTrend);
					console.log(that.arrayJeuxTrend);
				});
			})
		}
	}

	// CONSTRUCTEURS D'URL

	URLConstructorSugg(nomJeuProfil) {

		this.nomJeuProfil = "Minecraft";                                 // a récuperer !
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



	RandomIdGenerator(max) {
		var randomInt = (Math.floor(Math.random() * Math.floor(max)));
		console.log("log random int: " + randomInt)
		return randomInt;
	}


}


