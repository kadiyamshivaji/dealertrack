const SET_NEXT_PAGE = "SET_NEXT_PAGE";
const SET_CONTACT_SECTION = "SET_CONTACT_SECTION";
const SET_START_APP="SET_START_APP";
const SET_SHOW_REQ_INFO="SET_SHOW_REQ_INFO";
const SET_SHOW_PRO_INFO="SET_SHOW_PRO_INFO";
const SAVE_CONTACT_INFO="SAVE_CONTACT_INFO";
const SAVE_HOUSING_INFO="SAVE_HOUSING_INFO";
const SAVE_EMPLOYEMENT_INFO="SAVE_EMPLOYEMENT_INFO";


export const setNextPage = (action) => ({
    type: SET_NEXT_PAGE,
    payload: action.payload
});
export const setContactSection = (action) => ({
    type: SET_CONTACT_SECTION,
    payload: action.payload
});
export const startApp = (action) => ({
    type: SET_START_APP,
    payload: action.payload
});
export const setShowProInfo = () => ({
    type: SET_SHOW_PRO_INFO
});
export const setShowReqInfo = () => ({
    type: SET_SHOW_REQ_INFO
});
export const saveContactInfo=(action)=>({
    type: SAVE_CONTACT_INFO,
    payload:action.payload
});
export const saveHousingInfo=(action)=>({
    type: SAVE_HOUSING_INFO,
    payload:action.payload
});
export const saveEmploymentInfo=(action)=>({
    type: SAVE_EMPLOYEMENT_INFO,
    payload:action.payload
})
