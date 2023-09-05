import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService
    ){}

  getHello(): string {
    return 'Hello World!' + this.configService.get<string>('PORT');
  }
}
