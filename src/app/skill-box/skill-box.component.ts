import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-box',
  templateUrl: './skill-box.component.html',
  styleUrls: ['./skill-box.component.scss']
})
export class SkillBoxComponent implements OnInit {
  @Input() img = '';
  @Input() text = '';

  constructor() { }

  ngOnInit(): void {
  }

}
