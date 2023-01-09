import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginationPipe'
})
export class PaginationPipePipe implements PipeTransform {

  transform(items: any[], perPage: number): any[] {
    const totalPages = Math.ceil(items.length / perPage);
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      const page = items.slice(i * perPage, (i + 1) * perPage);
      pages.push(page);
      console.log(pages)
    }
    return pages;
  }
  }
