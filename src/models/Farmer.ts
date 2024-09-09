import React from "react";
import { Realm } from '@realm/react'

class Farmer extends Realm.Object {
    _id!: Realm.BSON.ObjectId;
    name!: string
    city!: string


    static schema = {
        name: 'Farmer',
        primaryKey: '_id',
        properties: {
            _id: 'objectId',
            name: 'string',
            city: 'string'
        }
    }
}

export default Farmer