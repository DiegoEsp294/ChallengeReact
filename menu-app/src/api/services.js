export const completeURL = 'https://api.spoonacular.com/recipes/complexSearch';
export const loginURL = 'http://challenge-react.alkemy.org';
export const apiKey = 'apiKey=c98c231e87aa406b834e5a68a4fa165e';

export const getAutocompleteURL = (info, number, query) => `${completeURL}?${apiKey}&addRecipeInformation=${info}&number=${number}&query=${query}`;
export const postLogin = () => `${loginURL}`;

export const data_api = {
  'url_post_login' : `http://challenge-react.alkemy.org`,
  'authentication':'?apiKey=c98c231e87aa406b834e5a68a4fa165e',
  'url_autocomplete': `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=10&query=`
}