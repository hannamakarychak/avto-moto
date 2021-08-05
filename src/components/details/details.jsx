import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import Button from "../button/button";

import Container from "../container/container";
import Review from "../review/review";
import Description from "../table/table";
import "./details.scss";
import "./tabs.scss"; //TODO: extract tabs

const Details = () => {
  return (
    <section className="details">
      <Container className="details__container">
        <Tabs className="tabs">
          <TabList className="tabs__list">
            <Tab className="tabs__button">Характеристики</Tab>
            <Tab className="tabs__button">Отзывы</Tab>
            <Tab className="tabs__button">Контакты</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Description />
            </TabPanel>
            <TabPanel className="details__reviews">
              <Button className="details__add-review" ghost>
                оставить отзыв
              </Button>
              <Review />
              <Review />
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </section>
  );
};

export default Details;
