import React from "react";



export default function NavigationBar() {
    return (
        <>

    <div class="header">
        <img class="profile-photo" src="stephen.jpg" alt="avatar" />

      <div class="tab">
        <button class="tablinks active" onclick="openObj(event, 'Objective')">Objective</button>
        <button class="tablinks" onclick="openObj(event, 'Skills')">Skills</button>
        <button class="tablinks" onclick="openObj(event, 'Projects')">Projects</button>
        <button class="tablinks" onclick="openObj(event, 'Contact')">Contact</button>
      </div>

      </div>
      <div id="Skills" class="tabcontent row">
      </div>
      <div id="Contact" class="tabcontent">
      <p>Email: pilarfajardo2328@gmail.com</p>
      <p>Contact: 09563101071</p>
      </div>
      <div id="Projects" class="tabcontent">
        <p></p>
      </div>
      



        </>
    );
}
