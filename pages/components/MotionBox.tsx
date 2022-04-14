import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = () => (
  <motion.button animate={{ rotate: 360 }} transition={{ duration: 2 }}>
    <Box
      w="100px"
      h="100px"
      backgroundColor="red.100"
      display="flex"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
      borderRadius="10px"
    >
      Box
    </Box>
  </motion.button>
);
