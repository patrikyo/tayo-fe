import "./App.scss";
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
  const servicesSection = new SectionClass(
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
        "faUsersLine",
        "service",
        "small"
      ),
      new cardClass(
        "",
        "Felsökning & reperation",
        "Med en erfaren och certifierade tekniker har vi expertisen att diagnostisera och reparera alla typer av hiss- och rulltrappsystem, från hydrauliska till drag- och maskinrumslösa system.",
        true,
        "faWrench",
        "reperation",
        "small"
      ),
      new cardClass(
        "",
        "Underhåll och uppföljning",
        "För att förebygga framtida problem kan hisskonsulten rekommendera en underhållsplan för kundens hiss- eller rulltrappssystem.",
        true,
        "faNoteSticky",
        "maintenance",
        "small"
      ),
    ],
    "tjänster"
  );

  const serviceSection = new SectionClass(
    "Service",
    2,
    "",
    "dark",
    [
      new cardClass(
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_675872871_2000133320009280405_350992.jpg",
        "",
        "Vi förstår att service är en avgörande faktor för att säkerställa att ditt hiss/rulltrappa system fungerar optimalt och säkert. Därför erbjuder vi en omfattande service som är utformad för att möta dina unika behov. Vi kan hjälpa dig med allt från regelbunden underhåll till akuta reparationer. Vårt mål är att minimera driftstopp och maximera livslängden på ditt hiss/rulltrappa system. Vi är tillgängliga dygnet runt för att lösa eventuella problem som uppstår och vår expertis säkerställer att du får de mest effektiva och kostnadseffektiva lösningarna. Vi kan också hjälpa dig att utveckla en serviceplan som är anpassad efter dina specifika behov och budget. Vi arbetar nära med dig för att säkerställa att ditt hisssystem alltid fungerar på sitt bästa sätt. Vårt fokus på kvalitet och service har gjort oss till en föredragen leverantör för många av våra kunder. Vi är stolta över vår förmåga att bygga långsiktiga relationer med våra kunder genom att erbjuda enastående kundservice och expertis inom hiss/rulltrappa branschen. Kontakta oss idag för att lära dig mer om våra servicealternativ och hur vi kan hjälpa dig att säkerställa att ditt hisssystem fungerar på bästa sätt. Vi ser fram emot att arbeta med dig!",
        false,
        "",
        "randId",
        "large"
      ),
    ],
    "service"
  );

  const reperationSection = new SectionClass(
    "Felsökning & reperation",
    2,
    "",
    "light",
    [
      new cardClass(
        "https://liftmart.co/wp-content/uploads/2020/08/elevator-repair.png",
        "Reparation",
        "Vi förstår att reparationer kan vara ett oönskat men nödvändigt ont när det gäller ditt hisssystem. Vår reparationstjänst är utformad för att snabbt och effektivt åtgärda problemen så att ditt hisssystem kan återgå till att fungera som det ska. Vår expertis och erfarenhet gör att vi kan hantera en mängd olika reparationer, oavsett om det handlar om mekaniska, elektriska eller hydrauliska system. Vi har tillgång till de senaste verktygen och teknikerna för att säkerställa att reparationen utförs korrekt och effektivt. Vi förstår också att reparationer kan orsaka störningar i din dagliga verksamhet. Därför erbjuder vi snabb och tillförlitlig service för att minimera störningarna och återställa ditt hisssystem till full funktionsduglighet så snabbt som möjligt. Vår reparationstjänst inkluderar också en grundlig inspektion av ditt hisssystem för att identifiera eventuella andra problem som kan behöva åtgärdas. Vi kommer att ge dig en detaljerad rapport om alla problem som identifieras och rekommendera de bästa lösningarna för att säkerställa att ditt hisssystem fungerar optimalt på lång sikt. Kontakta oss idag för att boka en reparationstjänst eller för att lära dig mer om hur vi kan hjälpa dig att återställa ditt hisssystem till full funktionsduglighet. Vi är här för att hjälpa dig!",
        false,
        "",
        "randId",
        "medium"
      ),
      new cardClass(
        "https://t3.ftcdn.net/jpg/04/42/55/48/360_F_442554882_I8mGeOhKYA9K3TgtiXKZE2mo18sTr5hw.jpg",
        "Felsökning",
        "Vi förstår att felsökning kan vara en avgörande faktor för att identifiera problem med ditt hisssystem innan de utvecklas till större problem. Vår felsökningstjänst är utformad för att hjälpa dig att upptäcka problem så tidigt som möjligt och förhindra potentiella driftstopp. Vi har utbildad personal och tillgång till avancerad utrustning för att snabbt och effektivt kunna felsöka ditt hisssystem. Vår erfarenhet och expertis inom hissteknik gör att vi kan identifiera de mest komplexa problemen och ge dig de bästa lösningarna för att åtgärda dem. Vårt fokus på kvalitet och service betyder att vi alltid arbetar med dina behov och budget i åtanke när vi utför felsökningen. Vi kommer att ge dig en detaljerad rapport om alla problem som identifieras och rekommendera de bästa lösningarna för att säkerställa att ditt hisssystem fungerar optimalt på lång sikt. Kontakta oss idag för att boka en felsökningstjänst eller för att lära dig mer om hur vi kan hjälpa dig att upptäcka och åtgärda problem med ditt hisssystem. Vi är här för att hjälpa dig!",
        false,
        "",
        "randId",
        "medium"
      ),
    ],
    "reperation"
  );

  const maintenanceSection = new SectionClass(
    "Underhåll och uppföljning",
    2,
    "",
    "dark",
    [
      new cardClass(
        "https://www.romaniajournal.ro/wp-content/uploads/2021/09/writing-report.jpg",
        "",
        "Underhåll och uppföljning är avgörande för att säkerställa att ditt hisssystem fungerar optimalt och förhindra potentiella driftstopp. Vi erbjuder skräddarsydda underhållstjänster som är utformade för att passa dina specifika behov och budget. Vårt underhållsprogram är utformat för att upprätthålla säkerheten och funktionaliteten hos ditt hisssystem genom regelbundna inspektioner och reparationer. Vi använder oss av de senaste verktygen och teknikerna för att säkerställa att ditt hisssystem hålls i gott skick och att eventuella problem upptäcks och åtgärdas i tid. Vi förstår också att varje hisssystem är unikt och därför erbjuder vi skräddarsydda underhållsplaner som är anpassade efter dina specifika behov. Vi kommer att utvärdera ditt hisssystem och ta hänsyn till faktorer som antal användare, användningsområde och ålder på utrustningen när vi utformar en plan som passar dina behov. Vi erbjuder också regelbunden uppföljning för att säkerställa att ditt hisssystem fortsätter att fungera optimalt. Vårt team kommer att kontakta dig regelbundet för att planera underhållsbesök och diskutera eventuella problem som du kan ha upptäckt. Vi kommer också att ge dig råd om de bästa lösningarna för att förbättra säkerheten och funktionaliteten hos ditt hisssystem. Kontakta oss idag för att boka en underhållstjänst eller för att lära dig mer om hur vi kan hjälpa dig att upprätthålla säkerheten och funktionaliteten hos ditt hisssystem på lång sikt. ",
        false,
        "",
        "randId",
        "large"
      ),
    ],
    "maintenance"
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Hero />
              <Section section={servicesSection} />
              <Section section={serviceSection} />
              <Section section={reperationSection} />
              <Section section={maintenanceSection} />
              <Footer />
            </>
          }
        />

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
