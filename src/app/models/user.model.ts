import { iMeterData } from './imeter-data.model';

export class User {
    public displayName: string;
    public email: string;
    public uid: string;
    public photoURL: string;
    public isiMeter?: boolean;
    public level?: number;
    public phoneNumber: string;
    constructor(displayName: string, email: string, photoURL: string, phoneNumber: string, uid: string ){
        this.displayName = displayName;
        this.email = email;
        this.photoURL = photoURL;
        this.phoneNumber = phoneNumber;
        this.uid = uid;

        this.isiMeter = false;
        this.level = 1;

    }
}
