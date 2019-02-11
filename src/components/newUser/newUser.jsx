import React from 'react';
// import  newUser from '../newUser/index';
// onFirstClickButton = () => {
//     <newUser/>;
// }
const ApprovalCard = ({nameOfProject,kind ,dateOfDemand}) => {
    return (
        <div class="ui cards">
            <div class="card">
                <div class="content">
                    {/* <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg" /> */}
                    <div style={{fontSize:16}}class="header">
                      {nameOfProject}
                        </div>
                    <div style={{fontSize:10}} class="meta">
                         {kind}
                        </div>
                    <div style={{fontSize:14}} class="description">
                        Do you want to scan this project ?
                        </div>
                        <div style={{fontSize:10}} class="meta">{dateOfDemand} 
                        </div>
                     {/* <b>urgent</b>  */}
                    
                </div>
                <div class="extra content">
                    <div class="ui two buttons">
                        <div   class="ui basic green button">Start</div> 
                        {/*onClick={  <newUser/>}  יפתח קומפוננטה שמביאה פרויקט כשלוחצים און קליק !!!!!! */}
                        <div class="ui basic red button">Reject to later</div>
                        {/* /*onClick={  <newUser/>}  יחזיר לקומפוננטה שמביאה פרויקט כשלוחצים און קליק !!!!!! */} */}
                    </div>
                </div>
            </div>

            

        </div>
    );
    // 
};
export default ApprovalCard;