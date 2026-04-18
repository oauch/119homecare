import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { useState } from "react";

const QnAPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "예약은 어떻게 하나요?",
      answer:
        "전화(010-9252-8119) 또는 카카오톡으로 연락주시면 됩니다. 원하는 날짜와 시간대를 말씀해주시면 가능한 방문 일정을 빠르게 안내해드립니다.",
    },
    {
      id: 2,
      question: "작업 시간은 얼마나 걸리나요?",
      answer:
        "에어컨 청소는 약 1~2시간, 세탁기 청소는 약 1시간 정도 소요됩니다. 기기 상태와 오염도에 따라 조금 달라질 수 있습니다.",
    },
    {
      id: 3,
      question: "출장비는 별도인가요?",
      answer:
        "안산시 전 지역은 출장비가 무료입니다. 다른 지역은 사전에 문의주시면 이동 거리 기준으로 안내해드립니다.",
    },
    // {
    //   id: 4,
    //   question: "A/S 보장은 어떻게 되나요?",
    //   answer:
    //     "모든 서비스에 대해 30일 A/S 보장을 해드립니다. 작업 후 문제가 발생하면 상태를 확인한 뒤 재안내 또는 재방문해드립니다.",
    // },
    {
      id: 4,
      question: "결제는 어떻게 하나요?",
      answer:
        "현금, 카드, 계좌이체 모두 가능합니다. 작업이 끝난 뒤 확인 후 결제하시면 됩니다.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <Container className="page">
      <FAQSection>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.id}
              className="panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FAQQuestion
                onClick={() => toggleFAQ(faq.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                $isOpen={openFAQ === faq.id}
              >
                <QuestionText>{faq.question}</QuestionText>
                <ToggleIcon $isOpen={openFAQ === faq.id}>
                  {openFAQ === faq.id ? "−" : "+"}
                </ToggleIcon>
              </FAQQuestion>

              <FAQAnswer
                initial={false}
                animate={{
                  height: openFAQ === faq.id ? "auto" : 0,
                  opacity: openFAQ === faq.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <AnswerContent>{faq.answer}</AnswerContent>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQSection>

      <ContactSection
        className="panel"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <ContactHeader>
          <span className="eyebrow">직접 문의</span>
          <ContactTitle>더 궁금한 점이 있으면 바로 연결하세요.</ContactTitle>
          <ContactDescription>
            가장 빠른 방법은 전화이며, 카카오톡과 운영 시간 정보도 함께
            정리해두었습니다.
          </ContactDescription>
        </ContactHeader>

        <ContactMethods>
          <a href="tel:010-9252-8119" style={{ textDecoration: "none" }}>
            <ContactMethod whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <ContactIcon>전화</ContactIcon>
              <ContactInfo>
                <ContactLabel>전화 상담</ContactLabel>
                <ContactValue>010-9252-8119</ContactValue>
              </ContactInfo>
            </ContactMethod>
          </a>

          <a
            href="https://pf.kakao.com/_jhdLT"
            style={{ textDecoration: "none" }}
          >
            <ContactMethod whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
              <ContactIcon>카카오톡</ContactIcon>
              <ContactInfo>
                <ContactLabel>카카오톡 상담</ContactLabel>
                <ContactValue as="span">119부부홈케어</ContactValue>
              </ContactInfo>
            </ContactMethod>
          </a>

          <ContactMethod whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}>
            <ContactIcon>시간</ContactIcon>
            <ContactInfo>
              <ContactLabel>상담 시간</ContactLabel>
              <ContactValue as="span">오전 9시 ~ 오후 10시</ContactValue>
            </ContactInfo>
          </ContactMethod>
        </ContactMethods>
      </ContactSection>
    </Container>
  );
};

const Container = styled.div`
  max-width: 980px;
  padding-top: 28px;

  @media (max-width: 768px) {
    padding-top: 18px;
  }
`;

const FAQSection = styled.section`
  margin-bottom: 28px;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const FAQItem = styled(motion.div)`
  overflow: hidden;
`;

const FAQQuestion = styled(motion.button)<{ $isOpen: boolean }>`
  width: 100%;
  padding: 22px 24px;
  background: ${(props) =>
    props.$isOpen ? "rgba(49, 130, 246, 0.08)" : "transparent"};
  color: ${(props) => (props.$isOpen ? "#1b64da" : "#191f28")};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    align-items: flex-start;
    gap: 12px;
    padding: 18px;
  }
`;

const QuestionText = styled.span`
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    flex: 1;
    font-size: 1rem;
    line-height: 1.5;
  }
`;

const ToggleIcon = styled.span<{ $isOpen: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;

const FAQAnswer = styled(motion.div)`
  overflow: hidden;
  background: rgba(247, 250, 255, 0.8);
`;

const AnswerContent = styled.div`
  padding: 0 24px 24px;
  color: var(--text-muted);
  line-height: 1.75;

  @media (max-width: 768px) {
    padding: 0 18px 18px;
  }
`;

const ContactSection = styled(motion.section)`
  padding: 28px;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    padding: 20px 18px;
  }
`;

const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 18px;
`;

const ContactTitle = styled.h2`
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  letter-spacing: -0.03em;
`;

const ContactDescription = styled.p`
  color: var(--text-muted);
  line-height: 1.7;
`;

const ContactMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactMethod = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(17, 24, 39, 0.06);

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

const ContactIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 22px;
  background: var(--primary-soft);
  color: var(--primary-strong);
  font-size: 0.98rem;
  font-weight: 800;
  flex-shrink: 0;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ContactLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-soft);
`;

const ContactValue = styled.a`
  font-size: 1.06rem;
  font-weight: 800;
  color: var(--text);
  text-decoration: none;
  letter-spacing: -0.02em;
`;

export default QnAPage;
