import * as mongoose from 'mongoose';
import {
    ContactSchema,
    providerSecuritySchema,
  } from '../models';
import { Request, Response } from 'express';

const Contact = mongoose.model('user', ContactSchema);
const loginConnect = mongoose.model('provider_securitie', providerSecuritySchema);

export class ContactController {

    public getContacts(req: Request, res: Response) {

        Contact.find({}, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
};

export class LoginController {

    public login(req: Request, res: Response) {
        loginConnect.findOne({ user_name: req.body.user_name, password: req.body.password }, (err, result) => {
            if (err) {
                res.send({ 'error': err });
            }
            if (result) {
                res.status(200).json({
                    status: "success",
                    message: "user logged successfully",
                    userInfo: result.user_name
                });
            } else {
                res.status(401).json({
                    status: "failure", 
                    message: "unauthorized user"
                });
            }
        });
    }
}



