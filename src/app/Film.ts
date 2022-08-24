import { Time } from "@angular/common"

//language interface hat can be embeddded into the film interface
export interface Language{
  languageId?:number,
  name: string
}

//category interface to allow the html to access the category.
export interface Category{
  categoryId?:number,
  name: string
}

//create a FILM interface that can store values when creating, logging in and resetting password.
//? means that it can be an optional value -
export interface Film{
  filmId?: number,
  title: string,
  description: string,
  releaseYear: number,
  languageId: number,
  language?: Language,
  rentalDuration: number,
  renaltRate: number,
  length: number,
  replacementCost: number,
  rating: string,
  specialFeatures: string,
  score: number,
  scoreCount: number,
  scoreTotal: number,
  filmCategory?:[Category],
  ticketsReserved: number,
  nextShowing: Date
}
