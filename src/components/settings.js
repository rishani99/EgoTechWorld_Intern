import React, { useState } from "react";
import "./settings.css";


const Settings = () => {


const [settings,setSettings] = useState({

companyName:"MMS Manufacturing Pvt Ltd",
email:"admin@mms.com",
phone:"0712345678",
address:"Colombo, Sri Lanka",
theme:"Light",
notifications:true

});



const [password,setPassword]=useState({

oldPassword:"",
newPassword:"",
confirmPassword:""

});





const handleChange=(e)=>{


setSettings({

...settings,

[e.target.name]:e.target.value

});


};






const handlePassword=(e)=>{


setPassword({

...password,

[e.target.name]:e.target.value

});


};






const saveSettings=()=>{


alert("Settings Updated Successfully!");



};







const changePassword=()=>{


if(password.newPassword !== password.confirmPassword){

alert("Passwords do not match");

return;

}


alert("Password Changed Successfully!");



};






return(


<div className="settings-container">


<h2>
System Settings
</h2>




{/* Company Settings */}


<div className="settings-card">


<h3>
Company Information
</h3>



<div className="form-grid">


<input

name="companyName"

value={settings.companyName}

onChange={handleChange}

placeholder="Company Name"

/>



<input

name="email"

value={settings.email}

onChange={handleChange}

placeholder="Email"

/>



<input

name="phone"

value={settings.phone}

onChange={handleChange}

placeholder="Phone Number"

/>




<input

name="address"

value={settings.address}

onChange={handleChange}

placeholder="Address"

/>



</div>



</div>







{/* Preferences */}


<div className="settings-card">


<h3>
System Preferences
</h3>




<label>

Theme

<select

name="theme"

value={settings.theme}

onChange={handleChange}

>


<option>
Light
</option>

<option>
Dark
</option>


</select>


</label>





<label className="toggle">


<input

type="checkbox"

checked={settings.notifications}

onChange={(e)=>

setSettings({

...settings,

notifications:e.target.checked

})

}


/>

Enable Notifications


</label>





<button

className="save-btn"

onClick={saveSettings}

>

Save Settings

</button>




</div>







{/* Password */}


<div className="settings-card">


<h3>
Change Password
</h3>




<div className="form-grid">


<input

type="password"

name="oldPassword"

placeholder="Current Password"

value={password.oldPassword}

onChange={handlePassword}

/>




<input

type="password"

name="newPassword"

placeholder="New Password"

value={password.newPassword}

onChange={handlePassword}

/>




<input

type="password"

name="confirmPassword"

placeholder="Confirm Password"

value={password.confirmPassword}

onChange={handlePassword}

/>


</div>




<button

className="password-btn"

onClick={changePassword}

>

Update Password

</button>



</div>







</div>


)

}



export default Settings;