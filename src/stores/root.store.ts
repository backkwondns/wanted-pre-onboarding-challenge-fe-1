import ThemeStore from './theme.store';
import ToDoStore from './todo.store';

export default class RootStore {
  themeStore: ThemeStore;

  todoStore: ToDoStore;

  constructor() {
    this.themeStore = new ThemeStore(this);
    this.todoStore = new ToDoStore(this);
  }
}
