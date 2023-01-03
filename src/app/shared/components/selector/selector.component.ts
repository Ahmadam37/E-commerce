import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  @Input() title:string = ""
  @Input() data:any[] = []
  @Output() selectedValue = new EventEmitter();
  Categories: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }



  getFilter(event:any){
    this.selectedValue.emit(event);
  }
}
