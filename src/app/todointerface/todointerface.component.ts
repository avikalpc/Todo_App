import { Component } from '@angular/core';
import { todo } from '../services/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todointerface',
  templateUrl: './todointerface.component.html',
  styleUrls: ['./todointerface.component.css']
})
export class TodointerfaceComponent {
  tid:any; 
  tname:any;
  tobj:any;
  todolist:any;
  constructor(private todoser:TodoService){

  }

  ngOnInit(){
    this.todoser.viewtodo().subscribe((res)=>{
      this.todolist=res;
      console.log(this.todolist)
    })
  }

  add(){
    this.tobj={
      todoid:this.tid,
      todosubject:this.tname,
      todostatus:false
    } 
  this.todoser.addtodo(this.tobj)
  
  }

  update(item:todo){
    this.todoser.updatestatus(item);
  }

  delete(item:todo){
    this.todoser.deleteTodo(item);
  }
}
