export  const tripReducer = (state, action)=>{
    switch(action.type){
        case 'START_TRIP':
            return [state]
    
        case 'FINISH_TRIP':
            return [state]

        default: 
        return state
    }
}