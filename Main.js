import React from "react";
import "../Styles/Main.css";
import LockIcon from '@mui/icons-material/Lock';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';



const Main = () => {
    return(
        <section className="main container section">
            <div className="secTitle">
                <h1 className="title">
                What are you writing for?
                </h1>
                <h3 className="smallText">
                Whether you’re looking for a tool to record your daily emotions and activities in a reflective journal, keep track of milestones in a food diary or pregnancy journal, or even record your dreams in a dream journal, ScribbleSymphony has you covered.

ScribbleSymphony gives you all the tools you need to focus on the ideas you want to preserve, rather than the process of writing itself.
                </h3>
                <button>Start your Journal now
            </button>
            <div className="entry">
                <LockIcon/>
      <h2>100% Private</h2>
      <p>Designed to focus on privacy, your entries are totally private by default!</p>
    </div>
    <div className="entry">
                <MobileFriendlyIcon/>
      <h2>Available Everywhere</h2>
      <p>Enjoy ScribbleSymphony on the move. Available for iOS and Android and totally free!</p>
    </div>
    <div className="entry">
                <NotificationsActiveIcon/>
      <h2>Never Forget to Write</h2>
      <p>Custom email reminders help you make sure you never forget to write.</p>
    </div>
    <div className="entry">
                <FavoriteIcon/>
      <h2>So much more...</h2>
      <p>Enjoy unlimited devices, journal and entry locking, entry sharing and more.</p>
    </div>

            </div>
            <div className="make">
      <h2>Start your journey today
</h2>
      <p>Journaling is a proven way to completely change your life, especially when you stick with it over time. Each time you write you'll get unparalleled clarity and life perspective.</p>
    </div>
    
    
    
        <div className="comp">
        <h2>1. Start writing</h2>
        <p>All you have to do is start. Take 5 minutes to write in your journal about how you're feeling or reflect on the day.</p>
    </div>
    <div className="comp">
        <h2>2. Keep it going</h2>
        <p>The more you write the easier it will be. Set reminders to keep a regular daily, weekly, or monthly cadence.</p>
    </div>
    <div className="comp">
        <h2>3. Reflect and grow</h2>
        <p>Links to your entries will be sent to you in the future so you can get see through clear window into the past.</p>
    </div>
    
    {/* <div className="comp">
    <img src="https://images.pexels.com/photos/606539/pexels-photo-606539.jpeg?cs=srgb&dl=pexels-jessica-lewis-606539.jpg&fm=jpg " alt="Image 3" /> */}
    {/* </div> */}
    
    
    
   
    
    
        </section>
    )
}
export default Main