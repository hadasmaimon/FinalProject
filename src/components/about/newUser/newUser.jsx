import React from 'react';
import AlertDialogSlide from '../../common/dialog';
// import history from '../../../routes/history';
// import  newUser from '../newUser/index';
// onFirstClickButton = () => {
//     <newUser/>;
// }

class ApprovalCard extends React.Component {
    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleYesClose = () => {
        this.setState({ open: false });
        const { dateOfDemand } = this.props;
        document.getElementById(dateOfDemand).style.display = 'none';
    };

    render() {
        const { nameOfProject, kind, dateOfDemand } = this.props;

        return (
            <div id={dateOfDemand} className='ui cards'>
                <div className='card'>
                    <div className='content'>
                        {/* <img className ='right floated mini ui image' src='/images/avatar/large/elliot.jpg' /> */}
                        <div style={{ fontSize: 16 }} className='header'>
                            {nameOfProject}
                        </div>
                        <div style={{ fontSize: 10 }} className='meta'>
                            {kind}
                        </div>
                        <div style={{ fontSize: 14 }} className='description'>
                            Do you want to scan this project ?
                        </div>
                        <div style={{ fontSize: 10 }} className='meta'>{dateOfDemand}
                        </div>
                        {/* <b>urgent</b>  */}

                    </div>
                    <div className='extra content'>
                        <div className='ui two buttons'>
                            <div className='ui basic green button'>
                                {/* // onClick={() => history.push('analytics/1')}
                            // יפתח קומפוננטה שמביאה פרויקט כשלוחצים און קליק !!!!!!> */}
                                Start
                            </div>
                            <div className='ui basic red button' onClick={this.handleClickOpen}>
                                Reject
                            </div>
                            <AlertDialogSlide handleClose={this.handleClose} handleYesClose={this.handleYesClose} open={this.state.open} />
                            {/* /*onClick={  <newUser/>}  יחזיר לקומפוננטה שמביאה פרויקט כשלוחצים און קליק !!!!!! */} */}
                    </div>
                    </div>
                </div>



            </div >
        );
        // 
    };
};

export default ApprovalCard;