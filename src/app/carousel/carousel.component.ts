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

	@Input() status : string;
	@Input() page : string;

	// Info reçues du profil

	nomJeuProfil: string;
	
	// Paramètres jeu

	nomJeu: String;
	description;
	image;
	classements;
	stores;
	plateformes;
	

	// tableau jeux

	arrayJeuxSugg = [];

	constructor() { }

	ngOnInit(): void {
				var that=this;
				var randomId=this.RandomIdGenerator(350000);
				


			
				// Requête
				
					if (this.page=="accueil" && this.status=="connecte") {
						console.log("début du if");
						$.get(this.URLConstructorSugg(this.nomJeuProfil),function(data){
							console.log(data);
							let arrayJeuxSuggRecu = data.results;
							console.log(arrayJeuxSuggRecu);
							arrayJeuxSuggRecu.forEach(element => {
								let jeuxSugg={nomJeu:element.name, description:element.short_description, plateformes:element.parent_platforms, image:element.background_image};
								that.arrayJeuxSugg.push(jeuxSugg);
								console.log(that.arrayJeuxSugg);
							});
						})}
		
					else if (this.page == "accueil" && this.status=="") {
						console.log("début du else if");
						$.get(this.URLConstructor(randomId),function(data){
							
							that.description=data.description_raw;
							that.image=data.background_image;
							that.plateformes=data.plateforms;
							that.nomJeu=data.name;
							})}
				
			}

			// CONSTRUCTEURS D'URL

			URLConstructorSugg(nomJeuProfil){
					
				this.nomJeuProfil="Minecraft";                                 // a récuperer !
				var URLapi="https://api.rawg.io/api";
				var selector="/games";
				var parameter="/"+this.nomJeuProfil+"/suggested";
				var URLGenerated=(URLapi+selector+parameter);
				return (URLGenerated)
			}

				URLConstructor(randomInt) {
				var URLapi="https://api.rawg.io/api";
				var selector="/games";
				var parameter="/"+randomInt;
				var URLGenerated=(URLapi+selector+parameter);
				console.log(URLGenerated);
				return (URLGenerated)
			}
				
			
			
			RandomIdGenerator(max){
				var randomInt=(Math.floor(Math.random() * Math.floor(max)));
				console.log("log random int: "+randomInt)
				return randomInt;
			}

			
	}


