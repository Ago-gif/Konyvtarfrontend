import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';

export type Book = {
  id: number;
  title: string;
  author: string;
  release_year: number;
};

@Controller('api/books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get('index')
  @Render('index')
  getHello() {
    return {
      books: this.booksService.findAll(),
    };
  }

  @Post()
  create(@Body() createBookDto: Book) {
    console.log(createBookDto);
    this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.booksService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.booksService.remove(+id);
  }
}
