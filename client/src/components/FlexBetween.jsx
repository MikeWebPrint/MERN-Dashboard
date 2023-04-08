const { default: styled } = require("@emotion/styled");
const { Box } = require("@mui/system");
// This is just a custom made flex container
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;