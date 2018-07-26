import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos.service';
import { AuthenticationService } from '../../authentication.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  constructor(
    private CursosService: CursosService,
    private AuthenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.CursosService.findAll();
  }

  get myList(){
  	return this.CursosService.myList;
  }

  get isLogged() {
    return this.AuthenticationService.loginStatus;
  }

  removeItem(item){
    this.CursosService.removeItem(item);
  }

}
