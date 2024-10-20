import { Body } from "../elementum/components/body";
import { FlexContainer } from "../elementum/components/container";
import { Text } from "../elementum/components/text";
import { Alignment, Direction } from "../elementum/enums/layout";
import { Colors } from "../elementum/style/colors";

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
        <Text>This test text</Text>
      </FlexContainer>
    </Body>
  );
};

export default App;
