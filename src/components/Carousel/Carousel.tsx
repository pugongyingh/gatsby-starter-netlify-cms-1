import React from "react";
import Slider from "react-slick";
// tslint:disable-next-line
import "slick-carousel/slick/slick-theme.css";
// tslint:disable-next-line
import "slick-carousel/slick/slick.css";
import styled from "../../styles/theme";
import StyledArrowButton from "./ArrowButton";

interface CarouselProps {
  dots?: boolean,
  arrows?: boolean,
  infinite?: boolean,
  speed?: number,
  slidesToShow?: number,
  slidesToScroll?: number,
  className?: string;
  dark?: boolean;
};

class Carousel extends React.Component<CarouselProps> {
  public static defaultProps = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  public reference: React.RefObject<Slider> = React.createRef();
  public next = () => {
    this.reference.current!.slickNext();
  }
  public previous = () => {
    this.reference.current!.slickPrev();
  };
  public render() {
    return (
      <div className={this.props.className}>
        <Slider ref={this.reference} {...this.props} className={this.props.className}>
          {this.props.children}
        </Slider>
        <div className="arrow-icons-wrap">
          <StyledArrowButton
            dark={!!this.props.dark}
            leftArrow={true}
            altText="An arrow icon"
            onClick={this.previous}
          />
          <StyledArrowButton
            dark={!!this.props.dark}
            leftArrow={false}
            altText="An arrow icon"
            onClick={this.next}
          />
        </div>
      </div>
    );
  }
}

const StyledCarousel = styled(Carousel)`
  .arrow-icons-wrap {
    height: 8vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;
export default StyledCarousel;