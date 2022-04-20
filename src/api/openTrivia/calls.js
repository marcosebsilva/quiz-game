import opentdb from './instance';

export const getSessionToken = async () => {
  try {
    const { data } = await opentdb.get('api_token.php?command=request');
    return data.token;
  } catch (error) {
    return error.message;
  }
};

export const getQuestions = async (settings, token) => {
  const { questionAmount, difficulty, theme } = settings;
  try {
    const ENDPOINT = `api.php?amount=${questionAmount}&category=${theme}&difficulty=${difficulty}&token${token}`;
    const { data } = await opentdb.get(ENDPOINT);
    return data.results;
  } catch (error) {
    return error.message;
  }
};

export const getThemes = async () => {
  try {
    const ENDPOINT = 'api_category.php';
    const { data } = await opentdb.get(ENDPOINT);
    return data.trivia_categories;
  } catch (error) {
    return error.message;
  }
};
