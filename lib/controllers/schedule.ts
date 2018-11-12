// scheduleSchema

import * as mongoose from 'mongoose';
import {scheduleSchema} from '../models';
import {Request ,Response} from 'express';

const scheduleConnect = mongoose.model('room_scheduler' ,scheduleSchema)



export class RoomScheduleController {

    public getRoomSchedule(req: Request, res: Response) {
      
        scheduleConnect.find((err, clinic) => {
          if (err) {
              res.send(err);
          }
          res.json(clinic);
      });
    }
   
};