import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  department: string;
  kpiName: string;
  action: any;
}

@Component({
  selector: 'app-kpi-list',
  templateUrl: './kpi-list.component.html',
  styleUrls: ['./kpi-list.component.scss']
})
export class KpiListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined | any;

  textSearched:string = '';
  displayedColumns: string[] = ['department', 'kpiName', 'action'];
  tableDataSource = new MatTableDataSource( [
    {id: 1, department: 1, kpiName: 'Hydrogen', action:''}
  ]);

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.tableDataSource.paginator = this.paginator;
  }

  searchText(){
    this.tableDataSource.filter = this.textSearched.trim().toLowerCase();
  }

  editKpi(event: any){
    console.log(event);
  }

  deleteKpi(event: any){
    console.log(event);
  }

}
