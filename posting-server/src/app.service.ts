import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  postQuestion(imageNo: string, value: string) {
    return `post from the front success! image: ${imageNo} value: ${value}`;
  }

}
