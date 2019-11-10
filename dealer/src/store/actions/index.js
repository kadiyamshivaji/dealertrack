const SET_NEXT_PAGE = "SET_NEXT_PAGE";
const SET_CONTACT_SECTION = "SET_CONTACT_SECTION";


export const setNextPage = (action) => ({
    type: SET_NEXT_PAGE,
    payload: action.payload
});
export const setContactSection = (action) => ({
    type: SET_CONTACT_SECTION,
    payload: action.payload
});

