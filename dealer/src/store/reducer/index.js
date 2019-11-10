import {defaultState} from '../state'
const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'GET_NEWS':
        return { ...state, loading: true };
      case 'NEWS_RECEIVED':
        return { ...state, news: action.json[0], loading: false}
      case 'SET_NEXT_PAGE':
        return { ...state, currentDot:action.payload}
      case 'SET_CONTACT_SECTION':
        return {...state, contactSection:action.payload }

      default:
        return state;
    }
  };
  export default reducer;