import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Menu = styled.div`
  width: 100%;
  height: 10vh;
  background-color: #373737;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-x: scroll;
  @media (max-width: 600px) {
    height: 20vh;
    flex-direction: column;
  }
`;

export const CategoryItem = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  &.active {
    border-bottom: 2px solid white;
    background-color: #8DC63F;
  }

  @media (max-width: 600px) {
    border-bottom: 1px solid white; /* Add a border between items */
  }
`;


export const MainContainer = styled.div`
  width: 95vw;
  height: 90vh;
  display: grid;
  gap: 10px;
  margin-top: 10px;
  grid-template-columns: repeat(5, minmax(250px, 1fr));
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(150px, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
  }
`;