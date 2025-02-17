import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { FilterContext } from '../../context/FilterContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: '2%',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));

const StyledToolbar = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  minHeight: 50,
  padding: theme.spacing(1, 2),
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: 'rgba(26, 44, 97, 0.7)',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgba(26, 44, 97, 0.7)',
  },
}));

const NavBar = () => {

    const { searchName, statusChange } = useContext(FilterContext);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        searchName(searchTerm); 
        }
    };

    const onLogout = () => {

      localStorage.removeItem('token');
      
      navigate('/login'); 
    };
  

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <StyledToolbar>
            <Button
                color="inherit"
                  component={Link} to="/characters" >
                  All Characters
              </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search Character..."
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyUp={handleKeyPress}
                />
                </Search>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 0.1, gap: 3  }}>
                <Button
                variant="contained"
                color="secondary"
                onClick={() => statusChange('alive')}
                >
                    Alive
                </Button>
                <Button
                variant="contained"
                color="secondary"
                onClick={() => statusChange('dead')}
                >
                    Dead
                </Button>
                <Button
                variant="contained"
                color="secondary"
                onClick={() => statusChange('unknown')}
                >
                    Unknown
                </Button>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                
                    <BootstrapTooltip title="Favorite">         
                      <IconButton component={Link} to="/favorite" >
                        <FavoriteIcon />
                      </IconButton>
                    </BootstrapTooltip>
                <Button
                color="inherit"
                  onClick={onLogout}
                >
                  Log out
                </Button>
            </Box>
            </StyledToolbar>
        </AppBar>
        </Box>
    );
};

export default NavBar;
