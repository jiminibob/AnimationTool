// generic object update
export const updateObject = ( object, mutations ) => {
    return { object, ...mutations };
}

// returns a key/value object based of element id's
export const createKeyValueGroupsFromParameter = ( baseArray, key_parameter ) => {
    return baseArray.reduce( ( object, element ) => {
        object[ element[ key_parameter ] ] = object[ element[ key_parameter ] ] || [];
        object[ element[ key_parameter ] ].push( element );
        return object;
    }, {} )
}

// concat an array
export const concatArray = ( baseArray, ...args ) => {
    return [].concat( baseArray, args );
}

// find an element in an array based on element id
export const findArrayElementById = ( baseArray, element_id ) => {
    return baseArray.find( ( element ) => { return element.id.toString() === element_id.toString() } )
}

// find an element index in an array based on element id
export const findArrayIndexByElementId = ( baseArray, element_id ) => {
     return baseArray.findIndex( ( element ) => { return element.id.toString() === element_id.toString() } )
}

// move an array element from one index position to another
export const changeArrayElementIndex = ( baseArray, indexA, indexB ) => {    
    const newdata   = [...baseArray];
    const copy      = newdata.splice(indexA, 1);   
    newdata.splice( indexB, 0, copy[0]); 
    return newdata;
}

// swap an element in an array with the supplied element base on element index position
export const replaceArrayElement = ( baseArray, elementIndex, newElement ) => {
    const newdata   = [...baseArray];
    newdata.splice( elementIndex, 1, newElement); 
    return newdata;
} 

// swap an element in an array with the supplied element base on element id
export const replaceArrayElementById = ( baseArray, elementID, newElement ) => {
    const index = findArrayIndexByElementId( baseArray, elementID );
    return replaceArrayElement( baseArray, index, newElement );
}

// get all array elements after a particular one
export const getArrayElementsAfterElementId = ( baseArray, elementID ) => {
    let index = findArrayIndexByElementId( baseArray, elementID );
    return baseArray.slice( index+1 );
}