import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSessionToken, getThemes, getQuestions } from '../../api/openTrivia/calls';
import FancyButton from '../../components/FancyButton';
import MainWrapper from '../../components/MainWrapper';
import PageTitle from '../../components/PageTitle';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import { useQuery } from 'react-query';
import { StyledSettingsWrapper } from './style.js';
import { setDifficulty, setTheme } from '../../redux/slices/settingsReducer';
import { addQuestions } from '../../redux/slices/questionsReducer';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function Settings() {
  const dispatch = useDispatch();
  const settings = useSelector((state) => state.settings);
  const { data, isLoading } = useQuery('themes', getThemes);
  const [token, setToken] = useLocalStorage('token', false);

  const handleClick = async () => {
    const questions = await getQuestions(settings, token.value);
    dispatch(addQuestions(questions));
  }

  useEffect(() => {
    const now = new Date();
    // 60000ms * 60 = 1 hour
    // 1 hour * 6 = 6 hours
    const SIX_HOURS = (60000 * 60) * 6;
    if (!token || now.getTime() > token.expiration) {
      getSessionToken()
      .then((token) => setToken({
        value: token,
        expiration: now.getTime() + SIX_HOURS,
      }));
    }
    // big thanks to soham https://www.sohamkamani.com/blog/javascript-localstorage-with-ttl-expiry/
  }, []);

  if (isLoading) return <p>carregando</p>
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
          action={ setDifficulty }
          width="48%"
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </CustomSelect>
        <CustomSelect
          label="Theme"
          action={ setTheme }
        >
          <option>Any</option>
          {data.map((theme) => (
            <option
              key={theme.id}
              value={theme.id}
            >
              {theme.name}
            </option>)
          )}
        </CustomSelect>
        <FancyButton
          extraStyle={{
              width: "60vw",
              ["max-width"]: "250px",
              ["font-size"]: "1.5rem",
              height: "70px",
            }
          }
          title="Start game"
          clickCallback={ handleClick }
          navigateLink="settings"
        />
      </StyledSettingsWrapper>
    </MainWrapper>
  )
}
