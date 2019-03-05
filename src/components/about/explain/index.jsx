import React from 'react';
// import video from '../../../../src/assets/video/checkmarx.mp4';

const ExplainContainer = ({ color }) => { //הוא מקבל מהאבא מקומפוננטת מאין . לא עובד
    var text =" The site is a site that manages the risks in the code of projects, The system allows the user to see in a convenient and clear manner the security status of the company's projects, including the number of errors in the code by means of illustration in different sections,  There is a possibility of filtering according to the severity of the project and according to the type of scan,  Search sources will be provided for use in the program, including articles to improve the code and reference materials for viewing" ;
               
  
   
return (<div  className='ui container'>>
        <h1 style={{ textAlign: "center" }}>M&O project</h1>
        <p style={{ textAlign: "center" }}>
            {text }
        </p>
        {/* <br /> */}
        <p style={{ textAlign: "center" }}>  האתר הינו אתר המנהל את הסיכונים בקוד של פרויקטים,
           האתר מאפשר לקבוע מדיניות סיכון של קוד הפרויקט ומציג למשתמש במספר צורות האם וכמה הוא עומד ביעדים, באתר משתמשים מתכנתים  בחברות מובילות בעולם,
           המערכת מאפשרת למשתמש לראות בצורה נוחה וברורה את מצב האבטחה  של פרויקטי החברה, מהן כמות השגיאות בקוד באמצעות אמצעי המחשה בחתכים שונים,
ישנה אפשרות של פילטור לפי חומרת הפרויקט וכן לפי סוג הסריקה,
ינתנו מקורות חיפוש לשימוש בתוכנית, הכוללים  מאמרים לשיפור הקוד וחומרי עזר לצפיה
        </p>
        <br/>
        <video />
       
        <video style={{ width: "550px", textAlign: "center" }} src={require('../../../assets/video/checkmarx.mp4')} controls />
    <br/>
    <br/>
    <br/>
    <div style={{fontFamily:'Times New Roman', fontSize: 30,textAlign: "center" }}>Thank you for using our app</div>
    </div>
    );
};

export default ExplainContainer;
// width: '44px ' ,