import * as mongoose from 'mongoose';
import { modalitieSchema } from '../models';
import { Request, Response } from 'express';
const modlityConnect = mongoose.model('modalitie', modalitieSchema);
const modlityConnectSave = mongoose.model('modalitie', modalitieSchema);

export class ModilityController {
    public modility(req: Request, res: Response) {
        modlityConnect.find({}, (err, modlityConnect) => {
            if (err) {
                res.send(err);
            }
            res.json(modlityConnect);
        });
    }

    public modilitySave(req: Request, res: Response) {
        let modlityConnect = new modlityConnectSave(req.body);
        modlityConnect.save((err, modlityConnect) => {
            if (err) {
                res.send(err);
            }
            res.json(modlityConnect);
        });
    }

    public updateModility(req: Request, res: Response) {
        const { updatedModility } = req.body;
        modlityConnect.findOneAndUpdate({ _id: updatedModility._id }, updatedModility, (err, modlity) => {
            if (err) {
                res.send({ 'error': err });
            }
            res.json({ "success": modlity });
        });
    }
}