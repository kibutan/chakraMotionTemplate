import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionDiv = () => (
  <Box backgroundColor="blue.100" borderRadius="30px" w="150px" h="150px">
    <motion.div className="motionDiv" animate={{ scale: 2 }} />
  </Box>
);
