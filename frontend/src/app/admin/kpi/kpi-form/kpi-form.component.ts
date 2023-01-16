import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kpi-form',
  templateUrl: './kpi-form.component.html',
  styleUrls: ['./kpi-form.component.scss']
})
export class KpiFormComponent implements OnInit {
  
  kpiForm: FormGroup | any;
  departments = [{id: 1, value:'dept1'},{id: 2, value:'dept2'},{id: 3, value:'dept3'}]

  constructor(private forBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.kpiForm = this.forBuilder.group({
      name:[''],
      decription:[''],
      departmentId:[''],
      hasSelfReview:[false]
    });
  }

}
