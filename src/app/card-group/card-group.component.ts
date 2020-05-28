import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss']
})
export class CardGroupComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
    var that=this;
    
  }
  URLConstructorTrending(dates) {
		var URLapi = "https://api.rawg.io/api";
		var selector = "/games";
		var parameter = "?dates=2020-03-03,2020-10-10&ordering=-added";
		var URLGenerated = (URLapi + selector + parameter);
		console.log(URLGenerated);
		return (URLGenerated)
	}

}
