import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components';


const StyledSpacer = styled(FormControl)`
  && { width: 100%; }
`
const Spacer = ({value, setValue}) => {
  return (
    <StyledSpacer />
  );
};

export default Spacer;