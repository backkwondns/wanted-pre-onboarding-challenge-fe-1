import { atomsInterface } from 'interfaces';
import { makeAutoObservable } from 'mobx';
import RootStore from './root.store';

export default class ToDoStore {
  rootStore: RootStore;

  selectedItem: atomsInterface.itemType = { title: '', content: '', id: '', updatedAt: '', createdAt: '' };

  history!: string[];

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get getSelectedItem(): atomsInterface.itemType {
    return this.selectedItem;
  }

  setSelectedItem(item: atomsInterface.itemType) {
    this.selectedItem = item;
  }

  setEditSelectedItem(key: 'title' | 'content', value: string): void {
    this.selectedItem = { ...this.selectedItem, [key]: value };
  }

  setInitSelectedItem() {
    this.selectedItem = { title: '', content: '', id: '', updatedAt: '', createdAt: '' };
  }

  get getHistory() {
    return this.history;
  }

  pushHistory(id: string) {
    this.history.push(id);
  }

  popHistory() {
    return this.history.pop();
  }
}
