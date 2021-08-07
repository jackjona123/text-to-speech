import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components';


const StyledTitleSpacer = styled(FormControl)`
  && { width: 100%; }
  font-family: arial;
  font-size: 15px;
  align-items: center;
  color: #ffffff;
`
const TitleSpacer = ({value, setValue}) => {
  return (
    <StyledTitleSpacer>
      View The Source Code At: https://github.com/jackjona123/tts
    </StyledTitleSpacer>
  );
};

export default TitleSpacer;