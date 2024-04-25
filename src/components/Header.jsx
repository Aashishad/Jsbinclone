import { AppBar, Toolbar, styled } from "@mui/material";

const Container = styled(AppBar)`
  background: #c5c6c7;
`


const Header = () => {

  const logo = '\Images\jsbin_logo.png'

  return (
    <Container position="static">
      <Toolbar>
        <img src={logo} alt='logo' style={{ width:40}}/>
      </Toolbar>
  </Container>
  )
}

export default Header;
