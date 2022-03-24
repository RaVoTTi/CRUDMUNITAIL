import { IPopulate } from './response.interface';


export const locationGeneric: ILocation = {
  
  title: '',
  description: '',
  division: '',
  number: '',
  schedule: '',
  urlImage: '',
  urlLocation: '',
};
export const locationGenericPopulate: ILocationPopulate = {
  _id: '',
  title: '',
  description: '',
  division: {
    name: '',
    _id: ''
  },
  number: '',
  schedule: '',
  urlImage: '',
  urlLocation: '',
  user: {
    name: '',
    _id: ''
  },
};
export interface ILocationPopulate {
  _id: string;
  title: string;
  description: string;
  division: IPopulate;
  number: string;
  schedule: string;
  urlImage: string;
  urlLocation: string;
  user?: IPopulate;
}
export interface ILocation {
  _id?: string;
  title: string;
  description: string;
  division: string;
  number: string;
  schedule: string;
  urlImage: string;
  urlLocation: string;
  user?: string;
}
