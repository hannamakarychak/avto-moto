import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";

import Container from "../container/container";
import "./tabs.scss";

const Details = () => {
  return (
    <section className="details">
      <Container className="details__container">
        <Tabs className="tabs">
          <TabList className="tabs__list">
            <Tab className="tabs__button tabs__button--accent">Характеристики</Tab>
            <Tab className="tabs__button">Отзывы</Tab>
            <Tab className="tabs__button">Контакты</Tab>
          </TabList>

          <TabPanels>
            <TabPanel></TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <div className="details__name">Борис Иванов</div>
        <svg width="8" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.618 4.364H.703V3.06h2.915V.072h1.319V3.06h2.922v1.304H4.937v2.973H3.618V4.364z"
            fill="#D12136"
          />
        </svg>
        <div className="details__row">
          <div className="details__heading">Достоинства</div>
          <div className="details__text">мощность, внешний вид</div>
        </div>
      </Container>
    </section>
  );
};

export default Details;
