import { moleculesInterface } from '.';

export interface ListInterface extends moleculesInterface.ListBodyInterface {
  onClickAdd: () => void;
  showDetail: boolean;
  currentMode: 'New' | 'Old' | 'None';
}

export interface DetailInterface extends moleculesInterface.DetailBodyInterface {
  currentMode: 'New' | 'Old' | 'None';
  showDetail: boolean;
  onClickClose: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
  onClickSave: () => void;
}
