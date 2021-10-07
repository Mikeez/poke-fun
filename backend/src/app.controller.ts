import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {


    const payload = this.appService.getHello();

    payload.subscribe( res => {
      console.log(res.data)
      return JSON.parse(res.data);
    })

  }
}
