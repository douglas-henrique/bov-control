import { ListItemProps } from "@/types/list";
import { Realm } from "@realm/react";
import { getRealm } from "@/database/realm";

const createCheckList = async (apiItem: ListItemProps) => {
    const realm = await getRealm()
    console.log('Creating checklist')
    try {
        realm.write(() => {
            console.log('wiriting')

            let farmerObj;
            let locationObj;
            if (!!apiItem.farmer) {
                console.log('has farmer')

                farmerObj = {
                    _id: new Realm.BSON.ObjectID(),
                    name: apiItem.farmer.name,
                    city: apiItem.farmer.city
                }
            }

            if (!!apiItem.location) {
                console.log('has location')

                locationObj = {
                    _id: new Realm.BSON.ObjectID(),
                    latitude: apiItem.location.latitude,
                    longitude: apiItem.location.longitude
                }
            }

            realm.create('Checklist', {
                _id: apiItem._id.toString(),
                type: apiItem.type,
                amount_of_milk_produced: apiItem.amount_of_milk_produced,
                from: apiItem.from.name,
                to: apiItem.to.name,
                number_of_cows_head: apiItem.number_of_cows_head,
                had_supervision: apiItem.had_supervision,
                created_at: new Date(),
                updated_at: new Date(),
                farmer: farmerObj,
                location: locationObj
            })
            console.log('created')

        })

    } catch (error) {
        console.log('error', error)

        return { error }
    }

}

export const verifyCheckList = async (list: ListItemProps[]) => {
    const realm = await getRealm()
    if (list.length > 0) {
        for (const apiItem of list) {
            let dbItem = realm.objectForPrimaryKey('Checklist', apiItem._id.toString())
            if(!dbItem) {
               await createCheckList(apiItem)
            }
          }

        return { message: 'finished' }
    }
}