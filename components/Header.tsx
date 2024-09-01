import { Flex, Text, Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface HeaderProps {
  icon: string | StaticImport;
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ icon, children }) => {
  return (
    <Box bg="blue.400" w="100%" p={3} color="white">
      <Flex justifyContent="center" alignItems="center" flexWrap="nowrap">
        <Image src={icon} alt="Credit card svg" width={20} height={20} />
        <Text fontSize="medium" fontWeight="bold" ml={2}>
          {children}
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
