import { Injectable, HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import {AxiosResponse} from 'axios';

import axios from 'axios'
import { YodaRequest } from './interfaces/app.interface';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) {}

  async getTranslateToYodaPhrase(phrase) {

    const req: YodaRequest = {
      text: phrase,
    }

    let response;

    try {
      const { data } = await axios({
        url:'https://api.funtranslations.com/translate/yoda',
        method: 'POST',
        data: req,
      });

      response = data;
    } catch (error) {
      console.log('ERRO AO REALIZAR REQUISIÇÃO NA API: ' + error)
    }

    return response
  }
}