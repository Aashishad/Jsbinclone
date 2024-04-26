import { useContext } from 'react';

import { Box, styled } from '@mui/material';

import { DataContext } from '../context/DataProvider';

const Result = () => {

  const { html, css, js } = useContext(DataContext);

  const srcCode =`
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
    </html>
    `


  return (
    <Box>
      <iframe
        srcDoc={srcCode}
        title="Output"
        sandbox='allow-scripts'
        frameBorder ={0}
        height="100%"
      />
    </Box>
  )
}

export default Result
