import { makeAutoObservable } from 'mobx';
import RootStore from './root.store';

export default class ThemeStore {
  rootStore: RootStore;

  showDetail = false;

  editMode = false;

  currentMode: 'New' | 'Old' | 'None' = 'None';

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get getShowDetail(): boolean {
    return this.showDetail;
  }

  toggleShowDetail() {
    this.showDetail = !this.showDetail;
  }

  setOpenShowDetail() {
    this.showDetail = true;
  }

  get getEditMode(): boolean {
    return this.editMode;
  }

  setOpenEditMode() {
    this.editMode = true;
  }

  setCloseEditMode() {
    this.editMode = false;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  get getCurrentMode(): string {
    return this.currentMode;
  }

  setCurrentMode(value: 'New' | 'Old' | 'None') {
    this.currentMode = value;
  }
}
