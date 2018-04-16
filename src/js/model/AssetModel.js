export const AssetModel = ({ id, name, src, width, height }) => {

    // generate some mad random id to be unique ( hopefully )
    // TODO : create some kinda global thing
    id = id || new Date().getTime() + Math.random().toFixed(10).toString().slice(2);

    // return object model with parsed data
    return {
        id: id,
        width: width || 100,
        height: height || 100,
        name: name || id,
        src: src || 'no_src_provided'
    }


}