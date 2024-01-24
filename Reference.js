// Responsive Styles
const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

// This is how to put responsive styling.
/*
The Array syntax. This is the RECOMMENDED method.
<Box bg="red.200" w={[300, 400, 500]}>
  This is a box
</Box>
*/

/*
The Object syntax:
<Text fontSize={{ base: "24px", md: "40px", lg: "56px" }}>
  This is responsive text
</Text>
 */
