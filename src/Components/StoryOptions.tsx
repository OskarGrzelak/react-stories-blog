import React from "react";
import {ReactComponent as Menu} from '../img/ellipsis-v-solid.svg';

import './StoryOptions.css';

const StoryOptions: React.FC = () => {
  return (
    <div className="story-options">
      <div className="progress">
        <p>You have read about 30% of the story. Time left: 35 minutes.</p>
      </div>
      <div className="options">
        <Menu />
      </div>
    </div>
  )
}

export default StoryOptions;