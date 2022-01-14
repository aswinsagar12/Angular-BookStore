import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/book/models/book.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  books: BookModel[];

  // life cycle hook
  ngOnInit(): void {
    this.books=[];
    let book = new BookModel();
    book.id = 1;
    book.author = 'Benyamin';
    book.imgSrc = "https://m.media-amazon.com/images/M/MV5BNGYyZTMyZmEtZDk5MS00NTczLWEwMGYtODBlMTJkMzA5N2I5XkEyXkFqcGdeQXVyMjkxNzQ1NDI@._V1_.jpg";
    book.name = 'Addu Jeevitham';
    book.price = 200;
    this.books.push(book);

    let book2 = new BookModel();
    book2.id = 2;
    book2.name = ".Net 2.0";
    book2.price = 200;
    book2.author = "Xyz Pub.";
    book2.imgSrc = "https://images-na.ssl-images-amazon.com/images/I/51JdckX4AdL.jpg";
    this.books.push(book2);


  }
}
