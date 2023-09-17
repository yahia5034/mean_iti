import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable,  } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TvServiceService {

  constructor(private http:HttpClient) { }
  api:string ="e9bd6f2c4895ce573b36c055debeab38"
  popular:any[]=[];
  //observable instead of promise and have three cases 
  getAllTv():Observable<any>{
    return this.http.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.api}`
      );
  }
  getTvById(id : number):Observable<any>{
    return this.http.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${this.api}`
    );
  }
  searchAllTv(tv:string):Observable<any>{
    return this.http.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${this.api}&query=${tv}`
    )
  }
}
