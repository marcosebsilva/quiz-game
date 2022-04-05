import opentdb from "./instance";

export const getSessionToken = async () => {
  try {
    const { data } = await opentdb.get('api_token.php?command=request');
    return data.token;
  } catch (error) {
    console.log("An error ocurred during attempt to get token.")
  }
};

export const getQuestions = async (settings, token) => {
  const { questionAmount, difficulty, theme } = settings;
  try {
    const ENDPOINT = `api.php?amount=${questionAmount}&category=${theme}&difficulty=${difficulty}&token${token}`;
    const { data } = await opentdb.get(ENDPOINT);
    return data.results
  } catch (error) {
    console.log("An error ocurred during attempt to get questions.");
  }
}

export const getThemes = async () => {
  try {
    const ENDPOINT = "api_category.php"
    const { data } = await opentdb.get(ENDPOINT);
    return data.trivia_categories
  } catch (error) {
    console.log("An error ocurred during attempt to get categorys.")   
  }
}