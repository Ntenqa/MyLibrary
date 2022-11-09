import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: any[] = localStorage.getItem('books') ? JSON.parse(`${localStorage.getItem('books')}`) :  [
    {
      id:1,
      img: "assets/no-drama.webp",
      title: 'No-Drama Discipline',
      author: "Author:Daniel J.Siegel,M.D.",
      description: "The whole Brain way to calm the chaos in nature your child's developing mind"
    },
    {
      id:2,
      img: "assets/help-kids.jpg",
      title: 'Help your kids with Computer Science',
      author: "Steven Carton",
      description: "A unique visual step by step guide to computers,coding, and communication"
    },
    {
      id:3,
      img: "assets/mother.webp",
      title: 'Mother Teresa',
      author: "Meg Greene",
      description: "A timeline highlights the most significant life events againsts a historical perspective."
    }
  ]

  booking: any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  bookFunc(id: any) {
    let book = this.books.filter(elem => elem.id == id)
    console.log(book)

    this.booking.push(book[0])

    localStorage.setItem('booking', JSON.stringify(this.booking))
  }

}
