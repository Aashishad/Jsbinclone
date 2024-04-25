import { useContext } from 'react';
import Editor from './Editor';
import { Box, styled } from '@mui/material';

import { DataContext } from '../context/DataProvider';
import Result from './Result';


const Container = styled(Box)`
  display : flex;
  height: 100vh;
`

const Code = () => {

  const { html, setHtml, css, setCss, js, setJs } = useContext(DataContext);
  
  return (
    <Container>
      <Editor
        heading="HTML"
        value={html}
        onChange={setHtml}
      />
      <Editor
        heading="CSS"
        value={css}
        onchange={setCss}
      />
      <Editor
        heading="JavaScript"
        value={js}
        onChange={setJs}
      />
      <Result/>
    </Container>
  )
}

export default Code
