import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
url='https://api.escuelajs.co/api/v1/products'
token='tGSIUrxQ39kCEsGexkL2HsYSDWaeeY19CpyLyGxN'
  constructor(private http:HttpClient) { 

  }
  getUsuarios():Observable<any>{
    return this.http.get(this.url)
  }
  getUsuario(id:number):Observable<any>{
return this.http.get<any>(this.url+'/'+id)
  }
}
