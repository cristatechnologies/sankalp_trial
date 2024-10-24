import { Marquee } from "@gfazioli/mantine-marquee";
import { Box } from "@mantine/core";

const MarqueeComponent = ({ boxData }) => {
  function BoxComponent({ children, ...props }) {
    return (
      <Box
        {...props}
        p="md"
        w="100vw"
        c="white"
        style={{ borderRadius: "8px", textAlign: "center" }}
      >
        <span
          style={{
            fontSize: "8rem", // Adjust text size as needed
            WebkitTextStroke: "1px gray", // Outline text with black
            color: "transparent", // Make the text fill transparent
          }}
        >
          {children}
        </span>
      </Box>
    );
  }

  return (
    <Marquee
      fadeEdges
      // pauseOnHover
      repeat={5}
      duration={60.4}
      gap="xl"
      fadeEdgesSize="xl"
      w={560}
      h={1000} // Increase marquee height
    >
      {boxData.map((box, index) => (
        <BoxComponent key={index} bg={box.bg}>
          {box.content}
        </BoxComponent>
      ))}
    </Marquee>
  );
};

export default MarqueeComponent;
