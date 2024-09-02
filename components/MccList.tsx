import React from "react";
import { List, AutoSizer, ListRowProps } from "react-virtualized";
import MccJson from "../files/mcc.json";
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

interface MccJsonProps {
  MCC: string;
  Description: string;
}
// Helper function to format MCC codes
const formatMccCode = (mcc: string): string => {
  // Ensure the MCC code has at least 4 digits, padding with zeros if necessary
  return mcc.padStart(4, "0");
};

const MccList: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  // Function to handle search input changes
  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Filter MCC list based on multiple search terms in MCC and description
  const filteredMccList = MccJson.filter((item) => {
    const terms = searchTerm.toLowerCase().split(" "); // Split the search term into an array of terms
    return terms.some(
      (term) =>
        formatMccCode(item.MCC).includes(term) ||
        item.Description.toLowerCase().includes(term)
    );
  });
  return (
    <Box width="100%" p={5}>
      <Flex align="center" justify="center" mb={3}>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            placeholder="Search by MCC or Description"
            value={searchTerm}
            onChange={onChangeSearchInput}
          />
        </InputGroup>
      </Flex>

      {filteredMccList
        .sort((a, b) => Number(a.MCC) - Number(b.MCC))
        .map((item: MccJsonProps) => (
          <Flex key={item.MCC} p="2" borderBottom="1px" borderColor="gray.200">
            <Box fontWeight="semibold">{formatMccCode(item.MCC)}</Box>
            <Box ml={10}>{item.Description}</Box>
          </Flex>
        ))}
    </Box>
  );
};

export default MccList;
