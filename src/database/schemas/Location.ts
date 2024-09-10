import { Realm } from '@realm/react'

class Location extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    latitude!: number
    longitude!: number


    static schema = {
        name: 'Location',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            latitude: 'double',
            longitude: 'double'
        }
    }
}

export default Location