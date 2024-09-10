import { Realm } from '@realm/react'
class From extends Realm.Object { 
    _id!: Realm.BSON.ObjectId;
    name!: string

    static schema = {
        name: 'From',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            name: 'string',
        }
    }
}

export default From 