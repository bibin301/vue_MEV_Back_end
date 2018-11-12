import * as mongoose from 'mongoose';
import { clinicShema } from '../models';
import { Request, Response } from 'express';

const ClinicConnect = mongoose.model('clinic', clinicShema);

export class ClinicController {

    public addClinic(req: Request, res: Response) {
      
      let newClinic = new ClinicConnect(req.body);
      newClinic.save((err, newClinic) => {
          if (err) {
              res.send(err);
          }
          res.json(newClinic);
      });
    }
    public getClinic(req: Request, res: Response) {
      
      ClinicConnect.find((err, clinic) => {
          if (err) {
              res.send(err);
          }
          res.json(clinic);
      });
    }
    public updateClinic(req: Request, res: Response) {
        const { _id, updatedClinic } = req.body;
        ClinicConnect.findOneAndUpdate({_id}, {...updatedClinic},(err, clinic) => {
            if (err) {
                res.send({'error':err});
            }
            res.json({ "success": clinic});
        });
    }
};