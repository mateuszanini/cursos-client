import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthenticationService {

  isLogged = false;	
  token = '';

  constructor(
  	private Http: Http
  	) { 
  }

  get loginStatus(){
	return this.isLogged;
  }

  login(user, callback){
  	this.Http.post('https://treinaweb-mean2.herokuapp.com/cursos/login', user)
  		.subscribe(response => {
  			var resp = response.json(); 
  			if(resp.message === 'ok'){
				this.isLogged = true; 
				this.token = resp.token;
  			}else{
  				this.isLogged = false;
  			}
  			callback(this.isLogged);
  		})
  }

}
