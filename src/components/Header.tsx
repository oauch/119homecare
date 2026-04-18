import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const navItems = [
  { to: "/", label: "홈" },
  { to: "/advantage", label: "서비스 장점" },
  { to: "/service", label: "가격 안내" },
  { to: "/qna", label: "문의사항" },
];

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Inner>
        <BrandArea>
          <BrandTitle to="/">119 부부 홈케어</BrandTitle>
        </BrandArea>

        <Nav aria-label="주요 메뉴">
          {navItems.map((item) => (
            <NavItem key={item.to}>
              <NavLink to={item.to} $isActive={location.pathname === item.to}>
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </Nav>

        <HeaderAction href="tel:010-9252-8119">빠른 전화 상담</HeaderAction>
      </Inner>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(motion.header)`
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 18px 20px 0;

  @media (max-width: 768px) {
    padding: 14px 14px 0;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr auto auto;
  gap: 20px;
  align-items: center;
  padding: 18px 22px;
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.82);
  background: rgba(255, 255, 255, 0.72);
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(24px);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    gap: 16px;
    padding: 16px;
    border-radius: 24px;
  }
`;

const BrandArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const BrandTitle = styled(Link)`
  text-decoration: none;
  color: #191f28;
  font-size: clamp(1.55rem, 2vw, 2.1rem);
  font-weight: 800;
  letter-spacing: -0.04em;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }
`;

const NavItem = styled.div`
  position: relative;
`;

const NavLink = styled(Link)<{ $isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 999px;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${(props) => (props.$isActive ? "#1b64da" : "#4b5563")};
  background: ${(props) =>
    props.$isActive ? "#e8f3ff" : "rgba(255, 255, 255, 0.75)"};
  border: 1px solid
    ${(props) =>
      props.$isActive ? "rgba(49, 130, 246, 0.2)" : "rgba(17, 24, 39, 0.06)"};
  box-shadow: ${(props) =>
    props.$isActive ? "0 10px 26px rgba(49, 130, 246, 0.16)" : "none"};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    min-height: 44px;
    padding: 0 12px;
    font-size: 0.88rem;
  }
`;

const HeaderAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0 22px;
  border-radius: 999px;
  background: linear-gradient(135deg, #3b8cff 0%, #246beb 100%);
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  box-shadow: 0 18px 34px rgba(49, 130, 246, 0.24);

  &:hover {
    transform: translateY(-1px);
  }

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 260px;
  }

  @media (max-width: 768px) {
    min-height: 48px;
    max-width: none;
  }
`;

export default Header;
