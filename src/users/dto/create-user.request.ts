/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class UserRequest {
  @ApiProperty()
  name: string;

  @ApiProperty()
  school: string;
}
