import { Controller, Get, Post, Body, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import {AxiosResponse} from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('translate')
  @Render('index')
  async getTranslateToYodaPhrase(@Body() phrase: string) {
    let resp = await this.appService.getTranslateToYodaPhrase(phrase); 
    return { "resp": resp.contents.translated.phrase };
  }

  @Get()
  @Render('index')
  root() {
    return { message: 'Put here your phrase' };
  }

}
