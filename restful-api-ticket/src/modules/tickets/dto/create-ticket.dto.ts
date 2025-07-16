import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { TicketPriority, TicketState } from '../enums';

export class CreateTicketDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  title: string;

  @IsEnum(TicketState)
  @IsOptional() // porque tiene default en la entidad
  state?: TicketState;

  @IsEnum(TicketPriority)
  @IsOptional() // porque tiene default en la entidad
  priority?: TicketPriority;
}
