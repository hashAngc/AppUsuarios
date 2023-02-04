import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})
export class ListUsuariosComponent {
  listUsuario: any[] = []
  loading:boolean=true
  constructor(private _serviceUser: ServiceService) {

  }
  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(): void {
    this._serviceUser.getUsuarios().subscribe(data => {
      console.log(data)
      this.loading=false;
      this.listUsuario = data
      
    })
  }
}
