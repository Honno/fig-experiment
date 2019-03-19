export function queryObject(object: Object, query: Array<string>): Object {
    let query_object: Object = new Object
    for (var i = 0; i < query.length; i++) {
        let property: string = query[i]
        if(property in object) {
            query_object[property] = object[property]
        } else {
            throw `Property ${property} does not exist`
        }
    }
    return query_object
}