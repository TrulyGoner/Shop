import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: var(--primary-color);
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

export const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  transition: color 0.3s;

  &:hover {
    color: var(--secondary-color);
  }
`;

export const CartContainer = styled.div`
  position: relative;
`;

export const CartIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: white;
  transition: fill 0.3s;

  &:hover {
    fill: var(--secondary-color);
  }
`;

export const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--accent-color);
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
`;