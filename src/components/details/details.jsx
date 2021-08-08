import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import Contacts from "../contacts/contacts";
import Container from "../container/container";
import ReviewsList from "../reviews-list/reviews-list";
import Description from "../table/table";
import "./details.scss";

const Details = () => {
  return (
    <section className="details">
      <Container>
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
            <TabPanel>
              <ReviewsList />
            </TabPanel>
            <TabPanel>
              <Contacts />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </section>
  );
};

export default Details;
