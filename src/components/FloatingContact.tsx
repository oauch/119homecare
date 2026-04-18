import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FloatingContact = () => {
  return (
    <Bar
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <Inner>
        <TextWrap>
          <Label>빠른 상담</Label>
          <Value>오늘 가능한 시간 먼저 확인해보세요</Value>
        </TextWrap>
        <Actions>
          <SecondaryAction to="/qna">문의 하기</SecondaryAction>
          <PrimaryAction href="tel:010-9252-8119">전화 상담</PrimaryAction>
        </Actions>
      </Inner>
    </Bar>
  );
};

const Bar = styled(motion.aside)`
  position: fixed;
  left: 50%;
  bottom: 18px;
  transform: translateX(-50%);
  width: min(calc(100% - 24px), 760px);
  z-index: 40;

  @media (max-width: 768px) {
    left: 14px;
    right: 14px;
    bottom: 12px;
    transform: none;
    width: auto;
  }
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 18px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  background: rgba(25, 31, 40, 0.9);
  color: #fff;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.2);
  backdrop-filter: blur(22px);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
    padding: 14px;
    border-radius: 24px;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Label = styled.span`
  font-size: 0.76rem;
  color: rgba(255, 255, 255, 0.64);
`;

const Value = styled.span`
  font-size: 0.96rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.45;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
`;

const ActionBase = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    min-height: 46px;
    width: 100%;
  }
`;

const SecondaryAction = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  background: rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    min-height: 46px;
    width: 100%;
  }
`;

const PrimaryAction = styled(ActionBase)`
  color: #191f28;
  background: #fff;
`;

export default FloatingContact;
