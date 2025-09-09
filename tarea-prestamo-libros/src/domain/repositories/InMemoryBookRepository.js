import { BookRepository } from "./BookRepository.js";

export class InMemoryBookRepository extends BookRepository {
  constructor() {
    super();
    this.books = [];
  }

  find() {
    return this.books;
  }
}
