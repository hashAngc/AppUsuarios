import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  id:number;
    imgUrl?:string;
  title?:string;
  precio?:string;
  descripcion?:string;

constructor(private uRouter:ActivatedRoute,private service:ServiceService){
  this.id=Number((this.uRouter.snapshot.paramMap.get('id')))


}
ngOnInit():void{
this.getUsuario()

}
getUsuario():void{
  this.service.getUsuario(this.id).subscribe(data=>{
    console.log(data)
    this.title=data.title
    this.precio=data.price
    this.imgUrl=data.images
    this.descripcion=data.description
  })
}
}
