import { Component, OnInit } from '@angular/core';
import { TvServiceService } from '../tv.service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  private searchval: string = '';
 

    constructor(private tvService:TvServiceService){}
    imagePath='https://image.tmdb.org/t/p/w500';
    tvList:any[]=[];
    allData:any[]=[]
    ngOnInit(): void{ 
      this.tvService.getAllTv().subscribe({
      next:(data)=>{
        this.tvList=data.results;
        this.allData=this.tvList;
        console.log(this.tvList);
      }});
    }
    
    set searchValue(value: string) {
      if(value==""){
        this.tvList=this.allData
      }else{
        this.searchval = value;
        this.searchallTv(value);
      }
    }


    toggleDetails(id:number){
      for(let item of this.tvList){
        if(id == item.id){
          item.toggleDiscription= !item.toggleDiscription ;
        }
      }
    }
    searchallTv(tvTitle: string) {
      this.tvService.searchAllTv(tvTitle).subscribe({
        next: (response) => {
          this.tvList = response.results;
        },
      });
    }
}
