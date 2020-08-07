import { Component, OnInit } from '@angular/core';
import { ReciepeService } from '../reciepe.service';

@Component({
  selector: 'app-diaglog-example',
  templateUrl: './diaglog-example.component.html',
  styleUrls: ['./diaglog-example.component.css']
})
export class DiaglogExampleComponent implements OnInit {

  constructor(public abc:ReciepeService) { }
ax:any;
  ngOnInit() {
    this.ax= this.abc.xyz;
  }

}
