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

	
	// Paramètres jeu
	nomJeu: String;
	description;
	image;
	classements;
	stores;
	plateformes;
	
	// Instances jeux

	jeu1=[];
	jeu2=[];

	// tableau jeux

	contenu = [];

	constructor() { }

	ngOnInit(): void {
				var that=this;
				var randomId=this.RandomIdGenerator(350000);
		
				console.log(this.page);
				console.log(this.status);
				// console.log("log on init randomId : "+randomId);
				// console.log(this.URLConstructor(randomId));
				$.get(this.URLConstructor(randomId),function(data){
					that.nomJeu=data.name;
					that.description=data.description_raw;
					that.image=data.background_image;
					that.plateformes=data.plateforms;
					that.stores=data.stores;
				});  
				
					if (this.page=="accueil" && this.status=="connecte") {
						console.log("début du if");
						$.get(this.URLConstructor2(this.RandomIdGenerator),function(data){
							that.nomJeu=data.name;
							that.description=data.description_raw;
							that.image=data.background_image;
							that.plateformes=data.plateforms;
							that.stores=data.stores;
						}); 
						// this.contenu = [this.jeu1, this.jeu2];
						// this.jeu1=[this.nomJeu, this.description, this.image, this.plateformes];
							}
							// else if (this.page == "accueil") {
						
							// }
				
			}
			URLConstructor(randomInt){
				var URLapi="https://api.rawg.io/api";
				var selector="/games";
				var parameter="/"+randomInt;
				var URLGenerated=(URLapi+selector+parameter);
				console.log(URLGenerated);
				return (URLGenerated)
			}
			URLConstructor2(randomInt){
				var URLapi="https://api.rawg.io/api";
				var selector="/games";
				var parameter="/"+250001;
				var URLGenerated2=(URLapi+selector+parameter);
				console.log(URLGenerated2);
				return (URLGenerated2)
			}
			RandomIdGenerator(max){
				var randomInt=(Math.floor(Math.random() * Math.floor(max)));
				console.log("log random int: "+randomInt)
				return randomInt;
			}

			
	}


