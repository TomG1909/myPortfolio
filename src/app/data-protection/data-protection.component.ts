import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit(): void {
  }

}
