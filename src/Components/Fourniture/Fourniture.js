import React from "react";
import "./Fourniture.scss";
import { ReactComponent as missionLogo } from "../../assets/target.svg";
import { ReactComponent as visionComponent } from "../../assets/eye.svg";
import { ReactComponent as historyLogo } from "../../assets/history.svg";
import FournitureComponent from "../FournitureComponent/FournitureComponent";

const Fourniture = () => {
  return (
    <div className="fourniture">
      <h1>Custom Furniture Built Only For You</h1>
      <div className="fourniture__blocks">
        <FournitureComponent
          Icon={missionLogo}
          title="Mission"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
        />
        <FournitureComponent
          Icon={visionComponent}
          title="Vision"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
        />
        <FournitureComponent
          Icon={historyLogo}
          title="History"
          desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"
        />
      </div>
    </div>
  );
};

export default Fourniture;
