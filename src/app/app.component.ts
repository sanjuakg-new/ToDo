import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoList } from "./todoList";
import { TodoItem } from "./todoItem";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDo';

  private list = new TodoList("Sanjeev", [
    new TodoItem("Eat", false),
    new TodoItem("Drink", false),
    new TodoItem("Mrink", true)]
  );
  
  public get username() : string {
    return this.list.user;
  }
  
  get itemCount () : number {
    return this.list.items.filter(item => !item.complete).length;
  }
}
