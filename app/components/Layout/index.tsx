import { Link } from "remix";
import { Box, HStack, Link as ChakraLink } from "@chakra-ui/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HStack as="nav" spacing={4} p={4}>
        <ChakraLink as={Link} to="/">
          Home
        </ChakraLink>
        <ChakraLink as={Link} to="/i-dont-exist">
          No route
        </ChakraLink>
        <ChakraLink as={Link} to="/an-error">
          Error
        </ChakraLink>
        <ChakraLink as={Link} to="/a-route">
          Real route
        </ChakraLink>
      </HStack>

      <Box as="main" p={4}>
        {children}
      </Box>
    </div>
  );
}
