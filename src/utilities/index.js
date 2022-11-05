
export const removeTimeStamp = (str) =>{
    if(str){
        return str.split('T')[0];
    }
    else{
        return ''
    }
}
export const Capitalize = (str) =>{

    if(str){
        
        return str[0].toUpperCase() + str.substring(1).toLowerCase()
    }else{
        return ''
    }
   
}
export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };