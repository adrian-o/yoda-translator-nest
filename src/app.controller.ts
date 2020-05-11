import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import {AxiosResponse} from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(): Observable<AxiosResponse<{}>> {
    return this.appService.getHello();
  }

}
