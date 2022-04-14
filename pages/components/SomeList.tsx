import { List, ListItem } from "@chakra-ui/react";
import React from "react";
import { Box, Center, chakra } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";

const MotionList = chakra(motion.ul, {
  shouldForwardProp: isValidMotionProp,
});

const MotionListItem = chakra(motion.li, {
  shouldForwardProp: isValidMotionProp,
});

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export default function SomeList() {
  return (
    <motion.ul variants={list}>
      <motion.li variants={item}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
      </motion.li>
      <motion.li variants={item}>
        eius totam accusamus reiciendis aliquid vel inventore tenetur, explicabo
      </motion.li>
      <motion.li variants={item}>
        illum expedita asperiores doloribus autem laudantium possimus iure
      </motion.li>
      <motion.li variants={item}>
        excepturi voluptatum nostrum aspernatur!
      </motion.li>
    </motion.ul>
  );
}
