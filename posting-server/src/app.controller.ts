import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { QuestionDto } from './questionDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  postQuestion(@Body() req: QuestionDto) {
    return this.appService.postQuestion(req.imageNo, req.value);
  }
}
