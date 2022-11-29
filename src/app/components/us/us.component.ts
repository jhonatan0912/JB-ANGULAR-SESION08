import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-us',
  templateUrl: './us.component.html',
  styleUrls: ['./us.component.css']
})
export class UsComponent implements OnInit {

  imagePath1 = '/assets/drone1.jpg';
  imagePath2 = '/assets/drone2.jpg';
  imagePath3 = '/assets/drone3.jpg';
  imagePath4 = '/assets/drone4.jpg';
  imagePath5 = '/assets/drone5.jpg';


  constructor() { }

  ngOnInit(): void {
  }

}
