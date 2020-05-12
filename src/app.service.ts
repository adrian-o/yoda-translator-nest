import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import {AxiosResponse} from 'axios';

import axios from 'axios'

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) {}

  getHello(): Observable<AxiosResponse<object>>   {
    console.log('Fazendo request...');
    return this.httpService.get('https://viacep.com.br/ws/01001000/json/');

    // let response;

    // try {
    //   response = await this.httpService.get('https://viacep.com.br/ws/01001000/json/');
    //   console.log('RESPONSE: ' + response)
    // } catch (error) {
    //   console.log('ERRO REQUEST');
    //   console.log(error)
    // }

    // return response

    // return this.httpService.post(
    //   'https://api.funtranslations.com/translate/yoda',
    //   JSON.stringify({text:"Master Obiwan has lost a planet."}) 
    // );
  }

  async getHelloAxiosPuro() {
    console.log('Fazendo request...');

    let response;

    try {
      const { data } = await axios({
        url:'https://api.funtranslations.com/translate/yoda',
        method: 'POST',
        data:{ text:"Master Obiwan has lost a planet." }
      });

      response = data;

    } catch (error) {
      console.log('ERRO AO REALIZAR REQUISIÇÃO NA API')
    }
    
    return response
  }
}