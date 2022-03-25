import { StyledWrapper } from './style.js';
import FancyButton from '../../components/FancyButton';
import PageTitle from '../../components/PageTitle/index.jsx';

export default function Home() {
  return (
    <StyledWrapper>
      <PageTitle
        normalText="Quiz"
        highlightedText="Game"
      />
      <FancyButton
        title="Play"
        navigationLink="settings"
      />
      <FancyButton
        backgroundColor="#FD28C1"
        textShadowColor="black"
        title="Leaderboard"
        width="60vw"
        maxWidth="300px"
        fontSize="1.5rem"
        height="50px"
        navigationLink="leaderboard"
      />
    </StyledWrapper>
  );
}
