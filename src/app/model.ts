import { ToDoItem } from './todoitem';

export class Model {
  name: string;
  items: ToDoItem[];
  id: any;
  description: string;
  imageUrl: string;
  constructor() {
        this.items = [
      {
        id: 1,
        description: 'Shazam ',
        imageUrl: 'https://movieposters2.com/images/1631718-b.jpg',
  
      },
      {
        id: 2,

        description: 'shazam',
        imageUrl: 'https://movieposters2.com/images/1849503-b.jpg',
       
      },
      {
        id: 3,
        description: 'I Kill Giants description',
        imageUrl: 'https://movieposters2.com/images/1520245-b.jpg',
      },
      {
        id: 4,
        description: 'Ferdinand description',
        imageUrl: 'https://movieposters2.com/images/1524659-b.jpg',
      },
    ];
    // this.items = [
    //   new ToDoItem(1,"shazam","https://movieposters2.com/images/1631718-b.jpg"),
    //   new ToDoItem(2,"shazam","https://movieposters2.com/images/1631718-b.jpg"),
    //   new ToDoItem(3,"shazam","https://movieposters2.com/images/1631718-b.jpg"),
    //   new ToDoItem(4,"shazam","https://movieposters2.com/images/1631718-b.jpg"),
    
    // ];
  }
}
