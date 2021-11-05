import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  events: string[] = [];
  

  @Output() public opened: boolean = true;
  constructor() { }

  ngOnInit(): void {

  }

  public menuToggle() {
    this.opened = true ? false : true
  }

}
