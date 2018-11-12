import { Request, Response } from "express";
import { ContactController, LoginController } from "../controllers";
import { ClinicController } from "../controllers/clinic";
import { ModilityController } from "../controllers/modility";
import { ProviderController } from "../controllers/provider";
import { RoomController } from "../controllers/room";
import {RoomScheduleController} from  "../controllers/schedule"
import { PatientController } from "../controllers/patient";

export class Routes {
    public contactController: ContactController = new ContactController();
    public loginController: LoginController = new LoginController();
    public modilityController: ModilityController = new ModilityController();
    public clinicController: ClinicController = new ClinicController();
    public providerController: ProviderController = new ProviderController();
    public roomController: RoomController = new RoomController();
    public scheduleController: RoomScheduleController = new RoomScheduleController();
    public patientController: PatientController = new PatientController();

    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            });

        app.route('/api/contact')
            .get(this.contactController.getContacts);

        app.route('/api/login')
            .post(this.loginController.login);

        app.route('/api/modility')
            .get(this.modilityController.modility)
            .post(this.modilityController.modilitySave)

        app.route('/api/updateModility')
            .post(this.modilityController.updateModility)

        app.route('/api/providerList')
            .get(this.providerController.providerList)
        app.route('/api/saveProvider')
            .post(this.providerController.providerSave)

        app.route('/api/updateProvider')
            .post(this.providerController.providerUpdate)

        app.route('/api/addClinic')
            .post(this.clinicController.addClinic)
        app.route('/api/updateClinic')
            .post(this.clinicController.updateClinic)

        app.route('/api/getClinic')
            .get(this.clinicController.getClinic)

        app.route('/api/addRoom')
            .post(this.roomController.addRoom)
        app.route('/api/updateRoom')
            .post(this.roomController.updateRoom)
        app.route('/api/getRoom')
            .get(this.roomController.getRoom)
        app.route('/api/viewScheduleList')
            .get(this.scheduleController.getRoomSchedule)

            
        
        app.route('/api/getPatient')
            .get(this.patientController.getPatient)
        app.route('/api/updatePatient')
            .post(this.patientController.updatePatient)
        app.route('/api/addPatient')
            .post(this.patientController.addPatient)
    }
}

