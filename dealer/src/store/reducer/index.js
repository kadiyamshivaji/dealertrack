import {defaultState} from '../state'
const reducer = (state = defaultState, action) => {
    switch (action.type) {
      
      case 'SET_NEXT_PAGE':
        return { ...state, currentDot:action.payload}
      case 'SET_CONTACT_SECTION':
        return {...state, contactSection:action.payload }
      case 'SET_START_APP':
        return {...state, startApp:action.payload }
      default:
        return state;
    }
  };
  export default reducer;