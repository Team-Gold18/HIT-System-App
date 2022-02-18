/* eslint-disable */
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src="./images/1.jpeg " />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="./images/2..jpeg" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src="./images/3.jpeg" />
        </a>
      </Wrap>
      <Wrap>
        <a>
          {" "}
          <img src="./images/4.jpeg" />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  margin-top: 10px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: #3bb19b;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  border-radius: 10px;
  position: relative;
  cursor: pointer;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    display: block;
    position: relative;
    padding: 4px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid #3bb19b;
      transition-duration: 300ms;
    }
  }
`;

export default ImgSlider;
