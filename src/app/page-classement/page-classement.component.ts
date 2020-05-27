import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-page-classement',
  templateUrl: './page-classement.component.html',
  styleUrls: ['./page-classement.component.scss']
})
export class PageClassementComponent implements OnInit {

  config: any;
  collection = { count: 20, data: [] };
  arrayJeuxRating = [];

  constructor() {

    //Create dummy data
    for (var i = 0; i < this.collection.count; i++) {
      this.collection.data.push(
        {
          id: i + 1,
          value: "items number " + (i + 1)
        }
      );
    }
    var that = this;

    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.collection.count
    };
    
  
  $.get(URLConstructorRating(), function (data) {
    console.log(data);
    let arrayJeuxRatingRecu = [];
    for (var i = 0; i < 100; i++) {
      arrayJeuxRatingRecu.push(data.results[i]);
    }
    console.log(arrayJeuxRatingRecu);
    arrayJeuxRatingRecu.forEach(element => {
      let jeuxRating = { nomJeu: element.name, dateSortie: element.released, note: element.rating, plateformes: element.parent_platforms, image: element.background_image };
      that.arrayJeuxRating.push(jeuxRating);
      console.log(that.arrayJeuxRating);
    });
  })
  
// CONSTRUCTEURS D'URL
  
  function URLConstructorRating() {

    var URLapi = "https://api.rawg.io/api";
    var selector = "/games";
    var parameter = "?ordering=-rating";
    var URLGenerated = (URLapi + selector + parameter);
    return (URLGenerated)
  }
    
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }



  ngOnInit(): void {

    
}

}
