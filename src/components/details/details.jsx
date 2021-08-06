import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";
import "@reach/tabs/styles.css";
import { useState } from "react";
import Button from "../button/button";
import Contacts from "../contacts/contacts";

import Container from "../container/container";
import Map from "../map/map";
import Modal from "../modal/modal";
import Review from "../review/review";
import Description from "../table/table";
import "./details.scss";
import "./tabs.scss"; //TODO: extract tabs

const Details = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

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
              <Button className="details__add-review" ghost onClick={handleOpenModal}>
                оставить отзыв
              </Button>
              <Review name={"hep"} pros={"good"} cons={"bad"} comment={"bla lba"} date={"minutr"} />
              <Review />
              <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
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
