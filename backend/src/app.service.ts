import { Get, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios'

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) {}


  getHello(): Observable<AxiosResponse<any>> {
    return this.httpService.get('https://pokeapi.co/api/v2/pokemon/1');
  }
  
  lol(): any {
    return {
      name: "lol",
      whoda: "best",
      mike: "foo"
    };
  }
}
