import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "https://rickandmortyapi.com/api/";

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) {}

  devolver() {
    return this.http.get(
      URL+'character/1,2,3,4,5,6,7,8'
    );
  }

  getCharacterByID(id: any){
    return this.http.get(URL+"character/"+id);
  }

}
