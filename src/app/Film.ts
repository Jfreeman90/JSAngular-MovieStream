//create a FILM interface that can store values when creating, logging in and resetting password.
//? means that it can be an optional value -
export interface Film{
  filmId?: number,
  title: string,
  description: string,
  releaseYear: number,
  languageId: number,
  language?: object,
  rentalDuration: number,
  renaltRate: number,
  length: number,
  replacementCost: number,
  rating: string,
  specialFeatures: string,
  score: number,
  scoreCount: number,
  scoreTotal: number,
  category?: object
}
