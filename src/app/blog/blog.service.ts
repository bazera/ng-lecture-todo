import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
  articles = [
    {
      id: '1',
      name: 'First Article Name',
      description: 'First Article Description',
    },
    {
      id: '2',
      name: 'Second Article Name',
      description: 'Second Article Description',
    },
    {
      id: '3',
      name: 'Third Article Name',
      description: 'Third Article Description',
    },
    {
      id: '4',
      name: 'Forth Article Name',
      description: 'Forth Article Description',
    },
    {
      id: '5',
      name: 'BlaBla',
      description: 'BlaBla აღწერა',
    },
  ];
}
