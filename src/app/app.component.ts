import { Component, OnInit } from '@angular/core';
import ArrayStore from 'devextreme/data/array_store';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dx-data-grid-advanced-validation-test';
  testData : DataSource = new DataSource({})

  data = [
    {id: 1, from: new Date('2023-07-13T08:06:18Z'), to: new Date('2023-07-13T14:47:03Z')},
  ];
  
  ngOnInit(): void {
    this.testData = new DataSource({
      store: new ArrayStore({
        key: "id",
        data: this.data
      })
    })
  }

  fromBeforeToRule(validation: any){
    if(validation.data.from < validation.data.to){
      return true;
    }
    return false;
  }
  
}
