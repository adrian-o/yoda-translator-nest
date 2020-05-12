import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import {AxiosResponse} from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('translate')
  getTranslateToYodaPhrase(@Body() phrase: string) {
    return this.appService.getTranslateToYodaPhrase(phrase);
  }

}
