import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

export const providerSecuritySchema = new Schema({

    user_name: {
        type: String
    },
    password: {
        type: String
    },
    provider_type: {
        type: String
    },
    provider_id: {
        type: String
    }
})

export const modalitieSchema = new Schema({

    id: {
        type: String
    },
    name: {
        type: String
    },
    code: {
        type: String
    },
    description: {
        type: String
    },
    is_active: {
        type: Boolean
    }
})

export const patientShema = new Schema({
    first_name: {
        type: String,
        required: 'first name required'
    }, last_name: {
        type: String,
        required: 'last name required'
    }, healthcard_no: {
        type: String,
        required: 'healthCardNo required'
    }, version: {
        type: String,
        default: '1.0'
    }, state: {
        type: String,
        required: 'state required'
    }, city: {
        type: String,
        required: 'city required'
    }, country: {
        type: String,
        required: 'country required'
    }, address: {
        type: String,
        required: 'address required'
    }, mobile_no: {
        type: String,
        required: 'mobile_no required'
    }
})
export const clinicShema = new Schema({
    name: {
        type: String,
        required: 'Enter a Name of clinic'
    },
    latitude: {
        type: String,
        required: 'Enter a Latitude of clinic'
    },
    longtitude: {
        type: String,
        required: 'Enter a Longtitude of clinic'
    },
    city: {
        type: String,
        required: 'Enter a City of clinic'
    },
    state: {
        type: String,
        required: 'Enter a State of clinic'
    },
    country: {
        type: String,
        required: 'Enter a Country of clinic'
    },
    pin_code: {
        type: String,
        required: 'Enter a Pin code of clinic'
    },
    address: {
        type: String,
        required: 'Enter a address of clinic'
    },
    is_active: {
        type: Boolean,
        default: false
    },
});


export const providerSchema = new Schema({

    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    firstName: {
        type: String
    },
    country: {
        type: String,
        default: ""
    },
    phone_no: {
        type: String,
        default: ""
    },
    pin_code: {
        type: String,
        default: ""
    },
    provider_type: {
        type: String,
        default: ""
    },
    is_active: {
        type: Boolean,
        default: false
    },
})

export const roomShema = new Schema({
    name: {
        type: String,
        required: 'Enter a Name of clinic'
    },
    clinic_id: {
        type: String,
        required: 'Enter a id of clinic'
    },
    modality_id: {
        type: String,
        required: 'Enter a id of modality'
    },
    is_active: {
        type: Boolean,
        default: false
    }
})


export const scheduleSchema = new Schema({
    room_id : {
        type: String,
        default:""
    },
    date_sch : {
        type: String,
        default:""
    },
    start_time : {
        type: String,
        default:""
    },
    end_time : {
        type: String,
        default:""
    }
  
})