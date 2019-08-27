import * as React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import styled from "../../styles/theme";

class VeryImportantStyleGuideComponent extends React.Component<{}> {
  public render() {
    return null;
  }
}

export const VeryImportantStyledStyleGuideComponent = styled(
  VeryImportantStyleGuideComponent
)``;
VeryImportantStyledStyleGuideComponent.displayName = "Grid";

export default VeryImportantStyledStyleGuideComponent;

global.Grid = Grid;
global.Col = Col;
global.Row = Row;
