//category interface to allow the html to access the category.
export interface FilmInfo{
  filmId?:number,
  title: string,
  releaseYear: string,
  score: number,
  scoreCount: number
}

export interface Actor{
  actorId?: number,
  firstName: string,
  lastName: string,
  films?:[FilmInfo]
}

