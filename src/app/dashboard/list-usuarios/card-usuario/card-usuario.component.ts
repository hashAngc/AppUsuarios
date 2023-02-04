import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent {
  @Input() user:any;
  imgUrl?:string;
  title?:string;
  date?:string;
  id?:number;
  ngOnInit():void{
this.title=this.user.title;
this.date=this.user.price
this.imgUrl=this.user.images
this.id = this.user.id 
  }
 
}
