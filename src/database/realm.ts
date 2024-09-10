import Realm, { schemaVersion } from "realm";
import { Checklist, Farmer, Location } from "./schemas";

export const getRealm = async () => { 
    const config = {
        schema: [Farmer, Location, Checklist],
        path: 'bundle.realm',
        schemaVersion: 6
    }
    
    const realm = await Realm.open(config)

    return realm
}
