export interface IPeopleResponse {
  count: number;
  next: string;
  previous: string;
  results : IPeople[];
}

export interface IPeople {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: [];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface IPlanetResponse {
  count: number;
  next: string;
  previous: string;
  results : IPlanets[];
}

export interface IPlanets {
  climate: string;
  created: string;
  diameter: string;
  edited: string;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;

}

export interface IFilmsResponse {
  count: number;
  next: string;
  previous: string;
  results : IFilms[];
}

export interface IFilms {
  characters: string[];
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  planets: string[];
  producer: string
  release_date: string
  species: string[]
  starships: string[]
  title: string
  url: string
  vehicles: string[];
}

export interface ISpeciesResponse{
  count: number;
  next: string;
  previous: string;
  results : ISpecies[];
}

export interface ISpecies {
  average_height: string
  average_lifespan: string
  classification: string
  created: string
  designation: string
  edited: string
  eye_colors: string
  films: string[]
  hair_colors: string
  homeworld: string
  language: string
  name: string
  people: string[]
  skin_colors: string
  url: string
}

export interface IVechiclesResponse {
  count: number;
  next: string;
  previous: string;
  results : IVechicles[];
}

export interface IVechicles {
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  created: string
  crew: string
  edited: string
  films: string[]
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  model: string
  name: string
  passengers: string
  pilots: string[]
  url: string
  vehicle_class: string
}
export interface IStarShipsResponse {
  count: number;
  next: string;
  previous: string;
  results : IStarShips[];
}

export interface IStarShips {
  MGLT: string
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  created: string
  crew: string
  edited: string
  films: string[]
  hyperdrive_rating: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  model: string
  name: string
  passengers: string
  pilots: string[]
  starship_class: string
  url: string

}
