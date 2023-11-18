import {get} from '@loopback/rest';

export class HelloFirstController {
  @get('/hellofirst')
  hellofirst(): string {
    return 'Hello world!!!';
  }
}
