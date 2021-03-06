import { IdName } from './division.interface';

export interface RESTLocation {
  count: number;
  locations: LocationGet[];
}
export interface RESTGetLocation {
  location: LocationGet;
}
export const locationGeneric: LocationPost = {
  title: '',
  description: '',
  division: '',
  number: '',
  schedule: '',
  urlImage: '',
  urlLocation: '',
};

export interface LocationGet {
  _id?: string;
  title: string;
  description: string;
  division: IdName;
  number: string;
  schedule: string;
  urlImage: string;
  urlLocation: string;
  user?: IdName;
}
export interface LocationPost {
  title: string;
  description: string;
  division: string;
  number: string;
  schedule: string;
  urlImage: string;
  urlLocation: string;
}
