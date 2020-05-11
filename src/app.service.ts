import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import {AxiosResponse} from 'axios';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) {}

  getHello(): Observable<AxiosResponse<{}>> {
    console.log('Fazendo request...');
    return this.httpService.post(
      'https://api.funtranslations.com/translate/yoda',
      JSON.stringify( {text:"Master Obiwan has lost a planet."} )
    );
  }
}