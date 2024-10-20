import { Body } from "../elementum/components/body";
import { FlexContainer } from "../elementum/components/container";
import { registerFont, Text } from "../elementum/components/text";
import { Alignment, Direction } from "../elementum/enums/layout";
import { Colors } from "../elementum/style/colors";

registerFont("Roboto", "100;200;300;400;500;600;700;800;900");

const App = () => {
  return (
    <Body background={Colors.blue[500]}>
      <FlexContainer
        w="300px"
        h="200px"
        color={Colors.red[500]}
        round="20px"
        justify={Alignment.Center}
        items={Alignment.Center}
        gapY="10px"
        direction={Direction.Vertical}
      >
        <Text color={Colors.yellow[200]} font={{ font: "Roboto", weight: 600 }}>
          This test text with custom font
        </Text>
      </FlexContainer>
    </Body>
  );
};

export default App;
