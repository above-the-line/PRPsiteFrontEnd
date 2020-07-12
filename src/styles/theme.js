import { createMuiTheme } from '@material-ui/core/styles'

// Material UI Theme
const theme = createMuiTheme({
    palette: {
        type: 'dark',
        // primary: {
        //   main: '#263238',
        //   light: '#4f5b62',
        //   dark: '#000a12'
        // },
        // secondary: {
        //   main: '#424242',
        //   light: '#6d6d6d',
        //   dark: '#1b1b1b'
        // }
    },
    overrides: {
        // Style sheet name ⚛️
        MuiLink: {
          // Name of the rule
          underlineNone: {
            // Some CSS
            underline: "none",
          },
        },
      },
      props: {
        // Name of the component ⚛️
        MuiButtonBase: {
          // The default props to change
          disableRipple: false, // No more ripple, on the whole application 💣!
        },
      }  
})

export default theme



// useStyles = makeStyles(theme => ({
//   root: {
//     height: 380,
//     transform: 'translateZ(0px)',
//     flexGrow: 1,
//   },
//   speedDial: {
//     position: 'absolute',
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
// }));