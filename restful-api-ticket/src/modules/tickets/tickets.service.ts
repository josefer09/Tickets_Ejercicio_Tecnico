import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';
import { HttpResponseMessage } from 'src/utils';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class TicketsService {
  private readonly logger = new Logger(TicketsService.name);

  constructor(
    @InjectRepository(Ticket)
    private readonly ticketRepository: Repository<Ticket>,
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    try {
      const ticketExist = await this.ticketRepository.findOneBy({
        title: createTicketDto.title,
      });
      if (ticketExist)
        throw new BadRequestException('Ticket Title already taken.');

      const ticket = this.ticketRepository.create(createTicketDto);
      const ticketSaved = await this.ticketRepository.save(ticket);

      return HttpResponseMessage.created(ticketSaved);
    } catch (error) {
      this.logger.error(`Error creating ticket: ${error.message}`);
      throw error;
    }
  }

  async findAll() {
    try {
      const tickets = await this.ticketRepository.find();
      return HttpResponseMessage.success(tickets);
    } catch (error) {
      this.logger.error(`Error fetching tickets: ${error.message}`);
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const ticket = await this.ticketRepository.findOneBy({ id });
      if (!ticket) throw new NotFoundException('Ticket not found');
      return HttpResponseMessage.success(ticket);
    } catch (error) {
      this.logger.error(`Error finding ticket: ${error.message}`);
      throw error;
    }
  }

  async update(id: string, updateTicketDto: UpdateTicketDto) {
    try {
      const ticket = await this.ticketRepository.preload({
        id,
        ...updateTicketDto,
      });

      if (!ticket) throw new NotFoundException('Ticket not found');

      const updated = await this.ticketRepository.save(ticket);
      return HttpResponseMessage.updated(updated);
    } catch (error) {
      this.logger.error(`Error updating ticket: ${error.message}`);
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const ticket = await this.ticketRepository.findOneBy({ id });
      if (!ticket) throw new NotFoundException('Ticket not found');

      await this.ticketRepository.remove(ticket);
      return HttpResponseMessage.deleted({ id });
    } catch (error) {
      this.logger.error(`Error removing ticket: ${error.message}`);
      throw error;
    }
  }
  

async seed() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'modules', 'tickets', 'data.json');
    this.logger.log(`Leyendo archivo en: ${filePath}`);

    const file = fs.readFileSync(filePath, 'utf-8');
    const ticketsData: Partial<Ticket>[] = JSON.parse(file);

    await this.ticketRepository.clear();

    const tickets = this.ticketRepository.create(ticketsData);
    const saved = await this.ticketRepository.save(tickets);

    return HttpResponseMessage.success(saved, 'Seeded successfully');
  } catch (error) {
    this.logger.error(`Error seeding tickets: ${error.message}`);
    throw error;
  }
}



}
