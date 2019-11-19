import {defaultState} from '../state'
const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'SET_NEXT_PAGE':
        switch(action.payload){
          case 0:
              return { ...state, current:action.payload,contractSaved:true}
          break;
          case 1:
              return { ...state, current:action.payload,housingSaved:true}
           break;
           case 2:
              return { ...state, current:action.payload,employmentSaved:true}
            break;
            case 3:
                return { ...state, current:action.payload}
            break;
        }
      case 'SET_CONTACT_SECTION':
        return {...state, contactSection:action.payload }
      case 'SET_START_APP':
        return {...state, startApp:action.payload }
      case 'SET_SHOW_PRO_INFO':
        return {...state, showMoreProtectedInfo: !state.showMoreProtectedInfo }
      case 'SET_SHOW_REQ_INFO':
        return {...state, showMoreRequiredInfo: !state.showMoreRequiredInfo }
      case 'SAVE_CONTACT_INFO':
        return {...state, contactInfo: action.payload }
      case 'SAVE_HOUSING_INFO':
       return {...state, housingInfo: action.payload }
      case 'SAVE_EMPLOYEMENT_INFO':
        return {...state, employmentInfo: action.payload }
      default:
        return state;
    }
  };
  export default reducer;