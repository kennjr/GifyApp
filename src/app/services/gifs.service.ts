import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  async getSomeGifs (){
    // use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
    const gf = new GiphyFetch(environment.apiKey)

    // configure your fetch: fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)
    // const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })
    // console.log("We got the gifs" + fetchGifs);
    // const { data: gifs } = await gf.trending({ limit: 10 })
  }
}