import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-page-counter',
  templateUrl: './page-counter.component.html',
  styleUrls: ['./page-counter.component.css'],
})
export class PageCounterComponent implements OnInit {
  @Input() totalPages: number
  @Input() activePage: number
  pages: number[]

  ngOnInit() {
    this.pages = []
    for (let i = 1; i <= this.totalPages; i++) this.pages.push(i)
  }
}
