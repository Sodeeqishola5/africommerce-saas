import { useState } from 'react';
import styled from 'styled-components';

const Left = styled.div`
  display: flex;
  width: 100%;
  border-radius: 5px;
  padding: 5px;
  flex: 1;
  background: rgb(255, 255, 255);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 5px;
  /* ----------- iPad 1, 2, Mini and Air ----------- */

  /* Portrait and Landscape */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
    display: none;
  }
`;

const CategoriesWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
  justify-content: flex-start;
`;
const CategoriesList = styled.div`
  display: flex;
  width: 100%;
`;
const CategoriesUl = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  flex-direction: column;
  gap: 10px;
`;
const CategoriesLi = styled.li`
  background: white;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  }
`;
const CategoriesTitle = styled.div`
  display: flex;
  background: rgb(252, 224, 217);
  height: 50px;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  border-radius: 5px;
  padding: 5px;
`;

export const LeftHero = () => {
  const [menu] = useState(false);
  return (
    <Left>
      <CategoriesWrapper>
        <CategoriesTitle>Categories</CategoriesTitle>
        <CategoriesList>
          <CategoriesUl>
            {['Men', 'Women', 'Electronics', 'kids', 'Car', 'Machines'].map(
              (li) => (
                <CategoriesLi props={menu} key={li}>
                  {li}
                </CategoriesLi>
              )
            )}
          </CategoriesUl>
        </CategoriesList>
      </CategoriesWrapper>
    </Left>
  );
};
