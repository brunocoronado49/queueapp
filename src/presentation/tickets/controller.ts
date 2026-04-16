import { Request, Response } from 'express';
import { TicketService } from '../services/ticket.service';

export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  public createTicket = async (req: Request, res: Response) => {
    res.status(201).json(this.ticketService.createTicket());
  };

  public getTickets = async (req: Request, res: Response) => {
    res.json(this.ticketService.tickets);
  };

  public getLastTicket = async (req: Request, res: Response) => {
    res.json(this.ticketService.lastTicketNumber);
  };

  public getPendingTicket = async (req: Request, res: Response) => {
    res.json(this.ticketService.pendingTickets);
  };

  public drawTicket = async (req: Request, res: Response) => {
    const { desk } = req.params;
    const deskString: string = desk as string;

    res.json(this.ticketService.drawTicket(deskString));
  };

  public doneTicket = async (req: Request, res: Response) => {
    const { ticketId } = req.params;
    const ticketIdString: string = ticketId as string;

    res.json(this.ticketService.onFinishTicket(ticketIdString));
  };

  public workingOnTicket = async (req: Request, res: Response) => {
    res.json(this.ticketService.lastWorkingOntickets);
  };
}
