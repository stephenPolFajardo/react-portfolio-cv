import React from "react";


const ProfileDetails = () => {
    return (
        <>
        <img class="profile-photo" src="stephen.jpg" alt="avatar" />
        <div class="center">
        <h1>Stephen Pol Fajardo</h1>
        <h3>Software Engineer</h3>
        <a href="stephen.pdf" download>Resume</a>
      </div>
      </>
    );
}



const BodyDescription = () => {
    return (
        <div id="Objective" class="tabcontent">
        <p>To take up any challenging position when my <span id="dots">...</span><span id="more">knowledge can be utilized for the maximum benefit of the organization. Open to new ideas and an attitude as well as potential to group and
       implement new technologies.</span></p>
       <div class="btn">
       <button onclick="myFunction()" id="myBtn">Read more</button>
       </div></div>
    );
}



export default { ProfileDetails, BodyDescription }
