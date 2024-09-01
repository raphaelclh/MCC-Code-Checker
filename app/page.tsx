"use client";

import CreditCardIcon from "../images/credit-card-svgrepo-com.svg"; // Update the path accordingly
import { VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import MccList from "../components/MccList";

const Home = () => {
  return (
    <VStack spacing={4}>
      <Header icon={CreditCardIcon}>MCC Code Checker</Header>
      <MccList />
    </VStack>
  );
};

export default Home;
