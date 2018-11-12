import * as mongoose from 'mongoose';
import { providerSchema } from '../models';
import { Request, Response } from 'express';
const Connect = mongoose.model('provider', providerSchema);
const providerConnectSave = mongoose.model('provider', providerSchema);

export class ProviderController {
    public providerList(req: Request, res: Response) {
        Connect.find({}, (err, modlityConnect) => {
            if (err) {
                res.send(err);
            }
            res.json(modlityConnect);
        });
    }

    public providerSave(req: Request, res: Response) {
        let modlityConnect = new providerConnectSave(req.body);
        modlityConnect.save((err, modlityConnect) => {
            if (err) {
                res.send(err);
            }
            res.json(modlityConnect);
        });
    }

    public providerUpdate(req: Request, res: Response) {
        const { updatedProvider } = req.body;
        Connect.findOneAndUpdate({ _id: updatedProvider._id }, updatedProvider, (err, provider) => {
            if (err) {
                res.send({ 'error': err });
            }
            res.json({ "success": provider });
        });
    }
}