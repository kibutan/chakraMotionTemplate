import React from "react";
import { Box, Center, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

// 1. Create a custom motion component from Box
const MotionBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};
const MyButton = ({ color = "white" }) => {
  return (
    <Box
      width="100px"
      height="100px"
      backgroundColor={color}
      borderRadius="30"
    />
  );
};
// 2. You'll get access to `motion` and `chakra` props in `MotionBox`
export function ChakraMotionExample() {
  return (
    <Center>
      <MotionBox
        width="12"
        height="12"
        bg="red.300"
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial="hidden"
        animate="visible"
      />
      <MotionBox
        width="12"
        height="12"
        bg="blue.300"
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
      />
      <MotionBox
        width="12"
        height="12"
        bg="blue.300"
        animate={{ y: -50 }}
        transition={{ ease: "easeInOut", duration: 2 }}
      />

      <MotionBox
        width="12"
        height="12"
        bg="blue.300"
        animate={{ y: [50, 0, -50] }}
        transition={{ ease: "easeInOut", duration: 2 }}
      />
      <MotionBox
        width="12"
        height="12"
        bg="pink100"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeInOut", duration: 2 }}
      />
    </Center>
  );
}
