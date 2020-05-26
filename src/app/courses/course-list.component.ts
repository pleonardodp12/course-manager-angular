import { Component, OnInit } from '@angular/core';
import { Course } from './courses'
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  ngOnInit(): void{
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl:'/assets/images/forms.png',
        price: 99.99,
        code: 'XPS-8976',
        duration: 120,
        rating: 5.4,
        releaseDate: 'December,2,2019'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/http.png',
        price: 45.99,
        code: 'LKL-1096',
        duration: 80,
        rating: 4,
        releaseDate: 'February,17,2020'
      }
    ]
  }

}
