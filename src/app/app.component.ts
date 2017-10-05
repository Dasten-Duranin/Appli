import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Http } from '@angular/http';



import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

	title = 'BikeNantes';

	weather   = null;
	pollition = null;
	warning   = null;
	theft     = null;

	constructor(private http: Http) {

	}

	getWeather(): any {
		return this.http.get('http://localhost:8000/weather/')
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}

	getPollution(): any {
		return this.http.get('http://localhost:8001/pollution/')
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}

	getWarning(): any {
		return this.http.get('http://localhost:8002/alert/')
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}

	getTheft(): any {
		return this.http.get('http://localhost:8004/vol')
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		return Promise.reject(error);
	}

	ngOnInit(): void {
		this.getWeather().then(rep => {this.weather = rep; console.log(this.weather)});
		this.getPollution().then(rep => {this.pollition = rep; console.log(this.pollition)});
		this.getWarning().then(rep => {this.warning = rep; console.log(this.warning)});
		this.getTheft().then(rep => {this.theft = rep;console.log(this.theft)});
	}
}


