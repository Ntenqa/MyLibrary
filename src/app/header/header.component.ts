import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public totalItem:number=0;
  public searchTerm:string='';
  

 
  


  constructor(
    // private bookingService: bookingService
    ) { }

  ngOnInit(): void {
    // this.bookingService.getBook()
    // .subscribe(res=>{
    //   this.totalItem=res.length;
    // })
  }
  search(event:any){
    // this.searchTerm=(event.target as HTMLInputElement).value;
    // this.bookingService.search.next(this.searchTerm)
    
  }

}