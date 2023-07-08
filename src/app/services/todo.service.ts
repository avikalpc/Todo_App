import { Injectable } from '@angular/core';
import { todo } from './todo';
import{of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todolist:todo[]=[

    {
      todoid:'1',
      todosubject:'Learn Angular',
      todostatus:false
    },
    {
      todoid:'2',
      todosubject:'Learn JavaScript',
      todostatus:false
    }

  ]
  constructor() { }

  viewtodo(){
    return of (this.todolist);
  }

  addtodo(usertodo:todo){
    this.todolist.push(usertodo);
  }

  updatestatus(updatetodo:todo){
    this.todolist.map((item)=>
    {
      if(item.todoid==updatetodo.todoid)
      {
        item.todostatus=!item.todostatus;
      }
      })
  }

  deleteTodo(deltodo:todo){
    const index=this.todolist.findIndex((item)=>{
      item.todoid==deltodo.todoid
    })
    this.todolist.splice(index,1)
  }



}


