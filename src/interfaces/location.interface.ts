import { IdName } from "./division.interface";

export interface RESTLocation {
  count:     number;
  locations: LocationGet[];
}
export const locationGeneric: LocationPost = {
  title:       'Valle Hermoso',
  description: 'Es hermoso',
  division: 'Hotel',
  number:      '21431312123',
  schedule:    '123213',
  urlImage:    'url de la image',
  urlLocation: 'url de google Maps',

};


export interface LocationGet {
  _id?:         string;
  title:       string;
  description: string;
  division:    IdName ;
  number:      string;
  schedule:    string;
  urlImage:    string;
  urlLocation: string;
  user?:        IdName;
}
export interface LocationPost {

  title:       string;
  description: string;
  division:    string;
  number:      string;
  schedule:    string;
  urlImage:    string;
  urlLocation: string;

}
