import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/filters.service';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.css']
})
export class LeftSideBarComponent implements OnInit {

  constructor(private filtersService: FiltersService) { }

  ngOnInit() {
  }
  filterData(filterObj){
    this.filtersService.applyFilter(filterObj);
    //this.filtersService.addFilterPill(filter);    
  }
}
