import { useQuery } from 'react-query';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSessionToken, getThemes, getQuestions } from '../../api/openTrivia/calls';
import FancyButton from '../../components/FancyButton';
import MainWrapper from '../../components/MainWrapper';
import PageTitle from '../../components/PageTitle';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import { StyledSettingsWrapper } from './style';
import { resetSettings, setDifficulty, setTheme } from '../../redux/slices/settingsReducer';
import { addQuestions, resetQuestions } from '../../redux/slices/questionsReducer';
import useLocalStorage from '../../hooks/useLocalStorage';
import Loading from '../../components/Loading';
import formatQuestions from '../../utils/formatQuestions';

export default function Settings() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const { data, isLoading, isError } = useQuery('themes', getThemes);
  const [token, setToken] = useLocalStorage('token', false);

  const handleClick = async () => {
    const questions = await getQuestions(settings, token.value);
    const formatedQuestions = formatQuestions(questions);
    dispatch(addQuestions(formatedQuestions));
  };

  useEffect(() => {
    dispatch(resetQuestions());
    dispatch(resetSettings());
    const now = new Date();
    // time in miliseconds
    const SIX_HOURS = 21600000;
    if (!token || now.getTime() > token.expiration) {
      getSessionToken()
        .then((res) => setToken({
          value: res,
          expiration: now.getTime() + SIX_HOURS,
        }));
    }
    // big thanks to soham https://www.sohamkamani.com/blog/javascript-localstorage-with-ttl-expiry/
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, dispatch]);

  if (isLoading) {
    return (
      <MainWrapper>
        <PageTitle
          normalText="Quiz"
          highlightedText="Game"
        />
        <Loading />
      </MainWrapper>
    );
  }

  if (isError) {
    return (
      <MainWrapper>
        <PageTitle
          normalText="Quiz"
          highlightedText="Game"
        />
        <h1>
          Algo deu errado...
        </h1>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper>
      <PageTitle
        normalText="Quiz"
        highlightedText="Game"
      />
      <StyledSettingsWrapper>
        <CustomInput
          label="Nickname"
        />
        <CustomInput
          label="Question amount"
          type="number"
          width="48%"
        />
        <CustomSelect
          label="Difficulty"
          action={setDifficulty}
          width="48%"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </CustomSelect>
        <CustomSelect
          label="Theme"
          action={setTheme}
        >
          <option>Any</option>
          {data.map((theme) => (
            <option
              key={theme.id}
              value={theme.id}
            >
              {theme.name}
            </option>
          ))}
        </CustomSelect>
        <FancyButton
          extraStyle={{
            width: '60vw',
            'max-width': '250px',
            'font-size': '1.5rem',
            height: '70px',
          }}
          clickCallback={handleClick}
          navigationLink="/question/1"
        >
          Start game
        </FancyButton>
      </StyledSettingsWrapper>
    </MainWrapper>
  );
}
