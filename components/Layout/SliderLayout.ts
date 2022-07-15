import styled from "styled-components";

const SliderLayout = styled.div`
    .slick-slide {
        filter: brightness(50%);
        transition: filter 500ms ease-in-out;
    }

    .slick-active {
        filter: brightness(100%);
        transition: filter 500ms ease-in-out;
    }
`;

export default SliderLayout;
