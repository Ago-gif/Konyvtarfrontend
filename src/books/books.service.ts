import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';
import { Book } from './books.controller.js';

@Injectable()
export class BooksService {
  bookList: Book[] = [
    {
      id: 1,
      title: 'Kincskereső kisbödöm',
      author: 'Erkel Ferenc',
      release_year: 2001,
    },
    {
      id: 2,
      title: 'Vuk',
      author: 'Matula bácsi',
      release_year: 2005,
    },
  ];

  create(createBookDto: Book) {
    this.bookList.push(createBookDto);
  }

  findAll() {
    return this.bookList;
  }

  findOne(id: number): Book {
    let index = this.bookList.findIndex((item) => item.id === id);
    return this.bookList[index];
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    let index = this.bookList.findIndex((item) => item.id === id);
    return this.bookList.splice(index, 1);
  }
}
