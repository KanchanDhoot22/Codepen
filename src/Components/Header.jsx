import {AppBar ,  Toolbar , styled} from '@mui/material';
const Container = styled(AppBar)`
background : #060606;
height : 9vh;
`;



const Header=()=>{
    const logo = 'https://cdn.iconscout.com/icon/free/png-256/free-codepen-8-461781.png'
  
    return(
        <Container position='static'>
            <Toolbar>
                <img src={logo} alt="logo" style={{ width: 60 }}/>
             </Toolbar>
        </Container>
        
    )

}

export default Header;