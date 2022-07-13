// import { Component, OnInit } from '@angular/core';
// import { Model } from '../model';
// import { ToDoItem } from '../todoitem';

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css'],
// })
// export class TodoComponent {
//   displayAll: boolean = true;
//   constructor() {}
//   desc = null;
//   act = null;

//   message = 'no message';
//   style = 'color:green';
//   model = new Model();

//   getName() {
//     return this.model.name;
//   }

//   ChangeColor(tbody: any, style: any, item: any) {
//     this.desc = item.description;
//     if (item.action) {
//       this.act = 'Yes';
//     } else if (!item.action) {
//       this.act = 'No';
//     }

//     for (let i = 0; i < tbody.children.length; i++) {
//       let element = tbody.children[i];
//       element.style.backgroundColor = 'white';
//     }
//     style.backgroundColor = 'springgreen';
//   }

//   ChangeAction(td: any) {
//     if (td.innerHTML == 'Yes') {
//       td.innerHTML = 'No';
//     } else {
//       td.innerHTML = 'Yes';
//     }
//   }

//   addItem(value: string) {
//     // this.message=value;
//     // console.log(value);
//     if (value != '') {
//       this.model.items.push(new ToDoItem(1, value, false));
//       this.message = '';
//       value = '';
//     } else {
//       alert('Please input info');
//     }
//   }

//   getItems() {
//     if (this.displayAll) {
//       return this.model.items;
//     }
//     return this.model.items.filter((item) => item.action == false);
//   }

//   Update(inp: any, i2: any) {
//     for (let i = 0; i < this.getItems().length; i++) {
//       if (this.getItems()[i].description == this.desc) {
//         this.getItems()[i].description = inp.value;
//         inp.value = null;
//         if (i2.value == 'Yes') {
//           this.getItems()[i].action = true;
//           i2.value = null;
//         } else if (i2.value == 'No') {
//           this.getItems()[i].action == false;
//           i2.value = null;
//         } else {
//           i2.value = null;
//         }
//       }
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[];
  repository: CategoryRepository;

  constructor() {
      this.repository=new CategoryRepository();
      this.categories=this.repository.getCategories();


  }

  ngOnInit() {}
}
