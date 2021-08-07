import React, { useState } from 'react';

import styled from 'styled-components';

import SpeechSpeedSetter from './SpeechSpeedSetter';
import LanguageSelect from './LanguageSelect';
import TextToSpeech from './TextToSpeech';
import Title from './Title';

//eslint-disable-next-line
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


import { DEFAULTS } from './appEnums';
import Spacer from './Spacer';
import TitleSpacer from './TitleSpacer';

const apiKey = process.env.REACT_APP_API_KEY;

const App = ({className}) => {
  const [language, setLanguage] = useState(DEFAULTS.LANGUAGES);
  const [speed, setSpeed] = useState(DEFAULTS.SPEED);
  const [text, setText] = useState(DEFAULTS.TEXT);
  const [speech, setSpeech] = useState(DEFAULTS.SPEECH);

  const handleClick = () => {
    const audioSrc = `http://api.voicerss.org/?key=${apiKey}&hl=${language}&src=${text}&r=${speed}`
    setSpeech(audioSrc);
  };

  fetch("http://api.voicerss.org/")
  .then(function() {
      console.log("API is Working");
  }).catch(function() {
      console.log("API Error");
  });

  return (
    <div className={className}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Title/>
        </Grid>
        <Grid item xs={12}>
          <TitleSpacer />
        </Grid>
        <Grid item xs={6}>
          <LanguageSelect value={language} setValue={setLanguage} />
        </Grid>
        <Grid item xs={6}>
          <SpeechSpeedSetter value={speed} setValue={setSpeed} />
        </Grid>
        <Grid item xs={12}>
          <Spacer/>
        </Grid>
        <Grid item xs={12}>
          <TextToSpeech value={text} setValue={setText} />
        </Grid>
        <Grid item xs={12}>
          <Spacer/>
        </Grid>
        <Grid item xs={12}>
          <Container>
            {/*<Button 
              style={{ padding: "14px 25px" }}
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Click To Play
            </Button>*/}
            <StyledButton onClick={handleClick}>Click To Play</StyledButton>
          </Container>
        </Grid>
        <Grid item xs={12} >
          { speech && <audio autoPlay src={speech}></audio> }
        </Grid>
      </Grid>
    </div>
  );
}
const StyledButton = styled.button`
    background: linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%);
    border-radius: 8px;
    border: 0;
    color: black;
    font-size: 20px;
    padding: 22px 42px;
    textTransform: capitalize;
    &:hover {
      background:linear-gradient( 135deg, #69FF97 10%, #00E4FF 100%);
      borderRadius: 5 ;
      font-size: 20px;
      textTransform: capitalize;
      transform: scale(1.05);
      transition: all .2s ease-in-out;
    }
`

const Container = styled.div`
 text-align: center;
`;

const StyledApp = styled(App)`
  max-width: 650px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  
`

export default StyledApp;
