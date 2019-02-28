import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import {commonQ} from '../../data/data';
// import DataOfCommen from'./data';
// const common='';
const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: `0 ${theme.spacing.unit * 3}px`,
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing.unit}px auto`,
    padding: theme.spacing.unit * 2,
  },
});

function AutoGridNoWrap(props) {
  const { classes ,dataQ ,dataA} = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar>?</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap> {dataQ}
        {/* {commonQ.map ((project, i) => common={project.question} /> )} */}
       </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={16}>
          <Grid item>
            <Avatar>!</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{dataA} </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);



// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Button from '@material-ui/core/Button';
// import Paper from '@material-ui/core/Paper';
// import grey from '@material-ui/core/colors/grey';

// const styles = theme => ({
//   root: {
//     position: 'relative',
//   },
//   paper: {
//     position: 'absolute',
//     top: 36,
//     right: 0,
//     left: 0,
//   },
  
//   howToUse : {
//     label:'USE', 
//     backgroundColor: grey[200],
//     height: theme.spacing.unit,
//     margin: theme.spacing.unit * 2,
//     // Selects every two elements among any group of siblings.
//     '&:nth-child(2n)': {
//       marginRight: theme.spacing.unit * 3,
//     },},
//     fake: {

//         backgroundColor: grey[200],
//         height: theme.spacing.unit,
//         margin: theme.spacing.unit * 2,
//         // Selects every two elements among any group of siblings.
//         '&:nth-child(2n)': {
//           marginRight: theme.spacing.unit * 3,
//         },
//   },
// });

// class ClickAway extends React.Component {
//   state = {
//     open: false,
//   };

//   handleClick = () => {
//     this.setState(state => ({
//       open: !state.open,
//     }));
//   };

//   handleClickAway = () => {
//     this.setState({
//       open: false,
//     });
//   };

//   render() {
//     const { classes } = this.props;
//     const { open } = this.state;
//     const fake = <div className={classes.fake}>information</div>;
//     const howToUse= <div  className={classes.howToUse}>like</div>;
//     return (
//       <div className={classes.root}>
//         <ClickAwayListener onClickAway={this.handleClickAway}>
//           <div>
//             <Button onClick={this.handleClick}>search type</Button>
//             {open ? (
//               <Paper className={classes.paper}>
               
//                 {howToUse}
//                 {fake}
//               </Paper>
//             ) : null}
//           </div>
//         </ClickAwayListener>
//       </div>
//     );
//   }
// }

// ClickAway.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ClickAway);







// import React from 'react';

// const CommonQ = () => {
//   return (
//     <div>
       
//     </div>
//   );
// }

// export default CommonQ;
