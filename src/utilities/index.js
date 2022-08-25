
export const removeTimeStamp = (str) =>{
    return str.split('T')[0];
}
export const Capitalize = (str) =>{
    return str[0].toUpperCase() + str.substring(1).toLowerCase()
}