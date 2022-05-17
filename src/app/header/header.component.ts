import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  dateTime: any;
  constructor() {}

  ngOnInit(): void {
    timer(0, 1000).subscribe(() => {
      this.dateTime = new Date();
    });
  }
}
