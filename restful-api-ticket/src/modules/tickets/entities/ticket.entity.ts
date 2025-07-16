import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TicketPriority, TicketState } from '../enums';

@Entity('tickets')
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text', { unique: true, nullable: false })
  title: string;

  @Column({
    type: 'enum',
    enum: TicketState,
    default: TicketState.OPEN,
  })
  state: TicketState;

  @Column({
    type: 'enum',
    enum: TicketPriority,
    default: TicketPriority.LOW,
  })
  priority: TicketPriority;
}
