

 export const incNumber = () => {
    return{
        type:"INCREMENT"
    }
  
}

export const dncNumber = (num) => {
    return{
        type:"DECREMENT",
        payload:num
    }
  
}



