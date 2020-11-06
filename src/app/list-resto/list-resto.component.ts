import { Component, OnInit } from '@angular/core';
//import {RestoService} from '../resto.service'
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

//  constructor(private resto:RestoService) { }

constructor(private resto: RestoService) {}
//collection={};
  collection: any =[];
  ngOnInit(): void {
    this.resto.getList().subscribe((result)=> {
      console.warn(result)
      this.collection=result
    })
  //  this.resto.getList().subscribe((result)=> {
  //    console.warn(result);
   //   this.collection=result;
  //  })
  }

  deleteResto(item) {
    this.collection.splice(item-1,1)
    this.resto.deleteResto(item).subscribe((result)=> {
      console.warn(result)
    })
  }

}
