import { Realm } from '@realm/react'
import Farmer from "./Farmer";
import From from "./From";
import To from "./To";
import Location from './Location';
class Checklist extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    type!: string;
    amount_of_milk_produced!: string;
    farmer!: Farmer
    from!: From
    to!: To;
    number_of_cows_head!: string
    had_supervision!: boolean
    location!: Location
    created_at!: Date;
    updated_at!: Date;

    static schema = {
        name: 'Checklist',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            type: 'string',
            amount_of_milk_produced: 'string',
            farmer: 'Farmer',
            from: 'From',
            to: 'To',
            number_of_cows_head: 'string',
            had_supervision: { type: 'bool', default: false },
            location: 'Location',
            created_at: 'date',
            updated_at: 'date'
        }
    }
}

export default Checklist