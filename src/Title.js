import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components';


const StyledTitle = styled(FormControl)`
  && { width: 100%; }
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-weight: 80px;
  font-size: 50px;
  align-items: center;
  
`

const Title = ({value, setValue}) => {
  return (
    <StyledTitle>
      Text To Speech Converter
    </StyledTitle>
  );
};

export default Title;