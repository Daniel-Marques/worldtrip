export interface ContinentSliderModel {
  id: number;
  name: string;
  description_short: string;
  cover: string;
}

export interface ContinentData {
  id: number;
  slug: string;
  name: string;
  description_short: string;
  description_long: string;
  quantity_country: number;
  quantity_languages: number;
  cover: string;
  banner: string;
  cities: City[];
}

export interface City {
  id: string;
  name: string;
  image: string;
  country: string;
  code: string;
}
