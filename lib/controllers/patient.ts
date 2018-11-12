import * as mongoose from 'mongoose';
import { patientShema } from './../models';
import { Request, Response } from 'express';

const PatientConnect = mongoose.model('patient', patientShema);

export class PatientController {

    public addPatient(req: Request, res: Response) {
      
      let newClinic = new PatientConnect(req.body);
      newClinic.save((err, newPatient) => {
          if (err) {
              res.send(err);
          }
          res.json(newPatient);
      });
    }
    public getPatient(req: Request, res: Response) {
      
        PatientConnect.find((err, patient) => {
          if (err) {
              res.send(err);
          }
          res.json(patient);
      });
    }
    public updatePatient(req: Request, res: Response) {
        const { updatedPatient } = req.body;
        PatientConnect.findOneAndUpdate({ _id: updatedPatient._id }, {...updatedPatient},(err, patient) => {
            if (err) {
                res.send({'error':err});
            }
            res.json({ "success": patient});
        });
    }
};