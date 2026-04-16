import { Router } from 'express';
import { TicketController } from './controller';
import { TicketService } from '../services/ticket.service';

export class TicketRoutes {
  static get routes(): Router {
    const router = Router();
    const ticketService: TicketService = new TicketService();
    const controller = new TicketController(ticketService);

    router.post('/', controller.createTicket);
    router.get('/', controller.getTickets);
    router.get('/last', controller.getLastTicket);
    router.get('/pending', controller.getPendingTicket);
    router.get('/draw/:desk', controller.drawTicket);
    router.get('/working-on', controller.workingOnTicket);
    router.put('/done/:ticketId', controller.doneTicket);

    return router;
  }
}
