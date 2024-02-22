import styled from "styled-components";

 export const GameCard = styled.div`
  padding: 10px;
  margin: 10px;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

export const Ribbon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  color: #fff;
`;

export const TopRibbon = styled(Ribbon)`
  background-color: #f00;
  font-size: 24px;
`;

export const Label = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 80px;
  height: auto;
`;

export const GameImg = styled.img`
  border-radius: 20px;
  width: 100%;
  height: auto;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
  color: red;
  &:hover {
    transform: scale(1.05);
    opacity: 1;
  }
`;

export const OverlayText = styled.div`
  color: #ffffff; /* Change to a light color */
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
`

export const OverlayPlayIcon = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;

`
