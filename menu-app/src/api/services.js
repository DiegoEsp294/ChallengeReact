
export const completeURL = process.env.REACT_APP_URL_SEARCH;
export const loginURL = process.env.REACT_APP_URL_LOGIN;
export const apiKey = 'apiKey='+process.env.REACT_APP_API_KEY;
export const number = process.env.REACT_APP_NUMBER_SEARCH;
export const info = process.env.REACT_APP_INFO_SEARCH;

export const getAutocompleteURL = (query) => `${completeURL}?${apiKey}&addRecipeInformation=${info}&number=${number}&query=${query}`;
export const postLogin = () => `${loginURL}`;