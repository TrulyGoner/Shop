import styled from 'styled-components';

const Footer = styled.footer`
  background: white;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  border-radius: 10px;
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FooterComponent = () => {
  return (
    <Footer>
      <Links>
        <a href="#">Избранное</a>
        <a href="#">Корзина</a>
        <a href="#">Условия сервиса</a>
      </Links>
      <SocialIcons>
        <a href="#"><i className="fab fa-vk"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-whatsapp"></i></a>
      </SocialIcons>
    </Footer>
  );
};