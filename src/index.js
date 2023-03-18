import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Section from "./section/Section";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import SectionClass from "./models/section";
import cardClass from "./models/card";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const aboutUsSection = new SectionClass(
  "Våra tjänster",
  2,
  "Med stor kunskap inom rulltrappor och hissar är vi heltäckande men i ett litet företag som kan ge personlig service. Det är viktigt för oss att vi har en nära kontakt med våra kunder.",
  "light",
  [
    new cardClass(
      "",
      "Service",
      "För oss är den nära kontakten med våra kunder viktig. Vi vill att du ska veta vad du betalar för och att den personliga servicen motsvarar dina förväntningar. Den nära kontakten möjliggörs av att vi är ett litet företag och att vi värnar om alla våra kunder, utan er finns inte vi.",
      false,
      "faUsersLine"
    ),
    new cardClass(
      "",
      "Felsökning",
      "Många tycker att felsökning på rulltrappor och hissar kan vara svårt men tack vare en gedigen kunskap om el med tillhörande behörighet är felsökning ett område vi har stor expertis inom. Kontakta oss för enklare eller för mer utmanande fel så hjälper vi er.",
      false,
      "faUsersLine"
    ),
    new cardClass(
      "",
      "Reparation",
      "Oavsett om ni behöver hjälp med små eller stora reparationer kan vi hjälpa er. Vi har tidigare arbetat med konsultation och hela arbetet från planering till en driftsäker och fungerande utrustning. Kontakta oss för att få veta hur vi kan hjälpa er.",
      false,
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

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/tayo"
          element={
            <>
              <Header /> <Hero /> <Section section={aboutUsSection} />
              <Section section={sectionService} />
            </>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/contact"
          element={
            <>
              <Header /> <Contact />{" "}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
    <div className="footer_wrapper">
      <Footer></Footer>
    </div>
    <Section section={sectionService} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
