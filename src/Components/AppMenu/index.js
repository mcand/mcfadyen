import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useStyles } from './styles';
import PropTypes from 'prop-types';

const AppMenu = ({ brand, onChange, onTypeChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          > 
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <a className={classes.brand} href="/">{ brand }</a>
          </Typography>
          <div>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            className={classes.select}
            defaultValue={'newest'}
            onChange={event => onTypeChange(event.target.value)}
            >
              <MenuItem value={'newest'}>newest</MenuItem>
              <MenuItem value={'oldest'}>oldest</MenuItem>
              <MenuItem value={'relevance'}>relevance</MenuItem>

              </Select>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search"
              data-testid="searchInput"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={event => onChange(event.target.value)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppMenu.propTypes = {
  brand: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onTypeChange: PropTypes.func.isRequired,
}

export default AppMenu;
