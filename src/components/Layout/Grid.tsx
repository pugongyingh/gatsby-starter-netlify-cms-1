import * as React from "react";
import { Col, Grid, Row } from "react-styled-flexboxgrid";
import styled from "../../styles/theme";

class VeryImportantStyleguideComponent extends React.Component<{}> {
  public render() {
    return this.props.children;
  }
}

export const VeryImportantStyledStyleguideComponent = styled(
  VeryImportantStyleguideComponent
)``;
VeryImportantStyledStyleguideComponent.displayName = "Grid";

export default VeryImportantStyledStyleguideComponent;

global.Grid = Grid;
global.Col = Col;
global.Row = Row;
