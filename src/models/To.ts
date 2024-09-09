import { Realm } from '@realm/react'
class To extends Realm.Object { 
    _id!: Realm.BSON.ObjectId;
    name!: string

    static schema = {
        name: 'To',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            name: 'string',
        }
    }
}

export default To 