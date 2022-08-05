import { atomsInterface, templateInterface } from '.';

export interface HomeInterface extends templateInterface.HomeTemplateInterface {
  onClickLogout: () => void;
}

export interface SendFormInterface {
  title: string;
  content: string;
}
export interface GetOneResponseInterface {
  data: atomsInterface.itemType;
}
export interface GetAllResponseInterface {
  data: atomsInterface.itemType[];
}
