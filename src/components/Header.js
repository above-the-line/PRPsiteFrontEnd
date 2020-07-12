import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { NavButton } from 'react-svg-buttons'

import styles from '../styles/Styles.module.css' 


class Header extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      drawer_open: false
    }
  }

  toggleDrawer = (toggle) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState(state => ({ ...state, drawer_open: toggle }));
  };

  divStyle = {'textDecoration':'none', color: 'white'}

  
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <Container
        className={styles.header}
      >

      <Box
        className={styles.headerButton}
      >
        <NavButton 
          direction="right"
          opened={false}
          thickness={2}
          color="#e8e6f9"
          onClick={this.toggleDrawer(true)}
          
        />
      </Box>


          <SwipeableDrawer 
            anchor={"right"}
            open={this.state.drawer_open}
            onOpen={this.toggleDrawer(true)}
            onClose={this.toggleDrawer(false)}
          >
            <Box padding="3px">
              {/* <Link  change the URL without refreshing the page. */}
              <Link to="/" style={this.divStyle}>
                <Typography variant="button" paragraph={true}> 
                  Current Projects 
                </Typography>
              </Link>
              {authToken && (
                  <Link to="/create" style={this.divStyle}>
                    <Typography variant="button" gutterBottom={true}> 
                      Create Project
                    </Typography>
                  </Link>
              )}

              {/* Ternary operator: login / logout */}
              {authToken ? (
                <div onClick={ () => {
                      localStorage.removeItem(AUTH_TOKEN)
                      this.props.history.push('/')
                    }}
                  >
                  <Typography variant="button" 
                  > 
                    Logout
                  </Typography>
                  </div>
              )  :  (
                <Link to="/Login" style={this.divStyle}>
                  <Typography variant="button" gutterBottom={true}> 
                    login
                  </Typography>
                </Link>
              )}

          </Box>
        </SwipeableDrawer>
      </Container>
    )
  }
}

export default withRouter(Header)