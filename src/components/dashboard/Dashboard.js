import React from "react";
import "./Dashboard.css";

import Btn from "../form/Btn";
import AboutHuman from "./AboutHuman";
import AboutPet from "./AboutPet";
import Agendamentos from "./Agendamentos";
import LogoNavbar from "./LogoNavbar";

const storedUser = localStorage.getItem("loggedInUser");

const loggedInUser = JSON.parse(storedUser || '""');

function Dashboard() {
  return (
    <div>
      <LogoNavbar />
      <div className="dash-container">
        <div className="dashboard">
          <div className="first-row">
            <div className="human-div">
              <AboutHuman />
            </div>
            <div>
              <Agendamentos />
              <div className="agenda-btn">
                <Btn
                  targetUrl="/booking"
                  color="azul"
                  label="Agendar estadia"
                />
              </div>
            </div>
          </div>

          <div className="pet-div">
            <h2>Meus Pets</h2>
            <AboutPet />
            <div className="add-pet-btn">
              <Btn targetUrl="/novo-pet" color="azul" label="Novo Pet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard