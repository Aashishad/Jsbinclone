import { useState, useEffect, useContext } from 'react';

import { Box, styled } from '@mui/material';

import { DataContext } from '../context/DataProvider';


const iframe = styled(Box)`
    height: 41vh;
`
const Result = () => {

  const [src, setSrc] = useState('');
  const { html, css, js } = useContext(DataContext);
  

  const srcCode = `
      <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
          <script>
        window.onerror = function(msg, url, lineNo, columnNo, error) {
          console.error(msg, url, lineNo, columnNo, error);
          return false;
        };
      </script>
      </html>
  `

  useEffect(() => {
      const timeout = setTimeout(() => {
          setSrc(srcCode);
      }, 250);

      return () => clearTimeout(timeout);
  }, [html, css, js])

  return (
    <div class="flex flex-col">
    <h2
                    className="text-xl font-semibold mb-2 text-black">
                    Output
                </h2>
    <Box style={html || css || js ? null : { background: '#ffffff' }}>
      
          <iframe 
              srcDoc={src}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
          height="600px"
          
          />    
      </Box>
      </div>
  )
}

export default Result;
