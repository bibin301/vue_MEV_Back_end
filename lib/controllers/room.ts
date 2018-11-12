import * as mongoose from 'mongoose';
import { roomShema } from '../models';
import { Request, Response } from 'express';

const RoomConnect = mongoose.model('room', roomShema);

export class RoomController {

    public addRoom(req: Request, res: Response) {
      
      let newRoom = new RoomConnect(req.body);
      newRoom.save((err, newRoom) => {
          if (err) {
              res.send(err);
          }
          res.json(newRoom);
      });
    }
    public getRoom(req: Request, res: Response) {
      
      RoomConnect.find((err, room) => {
          if (err) {
              res.send(err);
          }
          res.json(room);
      });
    }
    public updateRoom(req: Request, res: Response) {
        const { _id, updatedRoom } = req.body;
        console.log('updateRoom...', _id, updatedRoom)

        RoomConnect.findOneAndUpdate({_id}, {...updatedRoom},(err, room) => {
            if (err) {
                res.send({'error':err});
            }
            res.json({ "success": room});
        });
    }
};