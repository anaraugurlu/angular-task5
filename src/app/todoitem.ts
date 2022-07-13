// export class ToDoItem{
//     id:number;
//     desciption:string;
//     action:string;
//     constructor(description:string,action:string){
//         this.desciption=description;
//         this.action=action;
//     }
// }

export class ToDoItem {
  constructor(
    public id: number,
    public description: string,
   public imageUrl: string,
  ) {
    this.id = id;
    this.description = description;
   this.imageUrl=imageUrl;
  }
}

//const td=new ToDoItem(1,"Sport","Yes");
