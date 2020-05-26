import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
  template: 'status:{{status}}	page:{{page}}'
})
export class ListeComponent implements OnInit {
  // INPUTS

  @Input() status: string;
  @Input() page: string;

  //Tableaux

  arrayJeuxRating = [];


  constructor() { }

  ngOnInit(): void {

    var that = this;

    //REQUETES

    if (this.page == "accueil" && this.status == "") {

      $.get(URLConstructorRating(), function (data) {
        console.log(data);
        let arrayJeuxRatingRecu = [];
        for (var i = 0; i < 5; i++) {
          arrayJeuxRatingRecu.push(data.results[i]);
        }
        console.log(arrayJeuxRatingRecu);
        arrayJeuxRatingRecu.forEach(element => {
          let jeuxRating = { nomJeu: element.name, dateSortie: element.released, note: element.rating, plateformes: element.parent_platforms, image: element.background_image };
          that.arrayJeuxRating.push(jeuxRating);
          console.log(that.arrayJeuxRating);
        });
      })

    }
    // CONSTRUCTEURS D'URL

    function URLConstructorRating() {

      var URLapi = "https://api.rawg.io/api";
      var selector = "/games";
      var parameter = "?ordering=-rating";
      var URLGenerated = (URLapi + selector + parameter);
      return (URLGenerated)
    }
  }

}
