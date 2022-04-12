import { Component, OnInit } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 1200,
      delay: 100
    })
  }

}
