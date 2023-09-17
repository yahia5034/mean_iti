import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvServiceService } from '../tv.service.service';

@Component({
  selector: 'app-tv-details',
  templateUrl: './tv-details.component.html',
  styleUrls: ['./tv-details.component.css']
})
export class TvDetailsComponent implements OnInit{
  imagePath='https://image.tmdb.org/t/p/w500';
  tv:any=[]
  constructor(private ar:ActivatedRoute,private tvService:TvServiceService){}
  ngOnInit(){
    let id:number=parseInt(this.ar.snapshot.params["id"]);
    this.tvService.getTvById(id).subscribe({
      next:(data)=>{
        this.tv=data;
        console.log(data);
      }
    });

  }

}
