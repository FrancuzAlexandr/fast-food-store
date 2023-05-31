import styled from 'styled-components';

export const MenuWrapper = styled.ul`
  list-style: none;
  display: grid;
  flex-grow: 1;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  padding: 25px;
  overflow-y: scroll;
  background-color: rgba(255, 255, 255, 0.7);
`;
