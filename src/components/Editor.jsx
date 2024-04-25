import { Box, styled } from '@mui/material'

import {Controlled as ControlledEditor} from 'react-codemirror2'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


const Container = styled(Box)`
  flex-grow : 1;

 
`

const Heading = styled(Box)`
  background: #white;
  display: flex;
  padding: 9px 12px;  
  }
`

const Header = styled(Box)`
  
  background: #white;
  justify-content: space-between;
  font-weight: 500;
  height:max;
`

const Editor = ({ heading, value, onChange }) => {
  

  const handleChange = (editor, data, value) => {
    onChange(value);
  }

  return (
    <Container>
      <Header>
      <Box>
        <Box>
          <Heading>
            <Box
              component="span"
              style={{
                
                height: 20,
                width: 20,
                display: 'flex',
                placeContent:'center'

              }}
            >
            {heading}
          </Box>
          </Heading>
        </Box>
        </Box>
        </Header>
      <ControlledEditor
        value={value}
        onBeforeChange={handleChange}
        options={{
          
          theme: 'material',
          lineNumbers: true
        }}
      />

    </Container>
  
    
  )
}

export default Editor
