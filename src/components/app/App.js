import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../../index.css";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Section from "../section/Section";
import SectionClass from "../../models/section";
import cardClass from "../../models/card";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";

function App() {
  const services = new SectionClass(
    "Våra tjänster",
    2,
    "Med stor kunskap inom rulltrappor och hissar är vi heltäckande men i ett litet företag som kan ge personlig service. Det är viktigt för oss att vi har en nära kontakt med våra kunder.",
    "light",
    [
      new cardClass(
        "",
        "Service",
        "Vi tillhandahåller 24/7 akutreparationstjänster, så du kan lita på oss när du behöver det som mest. Vi är alltid redo att svara på alla hiss- eller rulltrappsnödsituationer och säkerställa att din byggnad är säker och tillgänglig vid alla tider.",
        true,
        "faUsersLine"
      ),
      new cardClass(
        "",
        "Felsökning & reperation",
        "Med en erfaren och certifierade tekniker har vi expertisen att diagnostisera och reparera alla typer av hiss- och rulltrappsystem, från hydrauliska till drag- och maskinrumslösa system.",
        true,
        "faUsersLine"
      ),
      new cardClass(
        "",
        "Underhåll och uppföljning",
        "För att förebygga framtida problem kan hisskonsulten rekommendera en underhållsplan för kundens hiss- eller rulltrappssystem.",
        true,
        "faUsersLine"
      ),
    ]
  );
  const sectionService = new SectionClass("Tjänster", 2, "", "dark", [
    new cardClass(
      "https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1acb41b9310a_city-scape.jpg",
      "randNy",
      "body",
      true,
      ""
    ),
    new cardClass(
      "https://assets.website-files.com/5e4b18feebfd1a721bb930e6/5e4b18feebfd1ab359b9312c_photo-1416400639808-f41f0c149b09.jpg",
      "randomNy",
      "body",
      true,
      ""
    ),
  ]);
  return (
    <BrowserRouter>
      {/** put everything between browser router in app component */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Hero /> <Section section={services} />
              <Section section={sectionService} />
              <div className="footer_wrapper">
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/contact"
          element={
            <>
              <Header /> <Contact /> <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
