import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import mainImg from "@assets/images/main.png";
import main1Img from "@assets/images/main1.jpg";
import main2Img from "@assets/images/main2.jpg";
import progress1 from "@assets/images/progress1.png";
import progress2 from "@assets/images/progress2.png";
import progress3 from "@assets/images/progress3.png";

const processSteps = [
  {
    id: "01",
    image: progress1,
    title: "간단한 상담 접수",
    description:
      "전화나 카카오톡으로 기기 종류와 원하는 날짜만 알려주시면 바로 안내해드립니다.",
  },
  {
    id: "02",
    image: progress2,
    title: "방문 일정 확정",
    description:
      "희망 시간대에 맞춰 기사 방문 가능 여부를 빠르게 확인하고 예약을 잡습니다.",
  },
  {
    id: "03",
    image: progress3,
    title: "분해 청소 완료",
    description:
      "현장 상태를 확인한 뒤 분해 청소와 마감 체크까지 깔끔하게 진행합니다.",
  },
];

const serviceHighlights = [
  {
    title: "에어컨 분해 세척",
    copy: "냄새, 곰팡이, 바람 세기 저하까지 한 번에 점검합니다.",
  },
  {
    title: "세탁기 내부 케어",
    copy: "드럼 내부, 세제함, 배수구를 분해 기준으로 관리합니다.",
  },
  {
    title: "안산 전 지역 상담",
    copy: "일정 확인부터 비용 안내까지 불필요한 왕복 없이 빠르게 연결합니다.",
  },
];

const HomePage = () => {
  return (
    <Container className="page">
      <HeroSection
        className="panel"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <HeroContent>
          <span className="eyebrow">안산 에어컨 · 세탁기 홈케어</span>
          <HeroTitle className="section-heading">
            예약은 더 쉽게,
            <br />
            청소는 더 믿음직하게.
          </HeroTitle>
          {/* <HeroCopy className="section-copy">
            119 부부 홈케어는 상담부터 방문 안내까지 과한 장식 없이 명확하게
            정리했습니다. 깔끔한 예약 흐름과 둥근 카드 중심 UI로 지금 바로
            필요한 정보를 빠르게 확인할 수 있습니다.
          </HeroCopy> */}

          <ActionRow>
            <ActionButton className="primary-button" href="tel:010-9252-8119">
              지금 전화 상담
            </ActionButton>
            <SecondaryActionButton className="secondary-button" to="/service">
              가격 먼저 보기
            </SecondaryActionButton>
          </ActionRow>

          {/* <MetricGrid>
            {trustMetrics.map((metric) => (
              <MetricCard key={metric.label}>
                <MetricLabel>{metric.label}</MetricLabel>
                <MetricValue>{metric.value}</MetricValue>
              </MetricCard>
            ))}
          </MetricGrid> */}
        </HeroContent>

        <HeroVisual>
          <PrimaryVisual
            src={mainImg}
            alt="119 부부 홈케어 대표 서비스 이미지"
            whileHover={{ y: -6 }}
          />
          <VisualStack>
            <StackImage
              src={main1Img}
              alt="에어컨 청소 사례"
              whileHover={{ y: -6 }}
            />
            <StackImage
              src={main2Img}
              alt="세탁기 청소 사례"
              whileHover={{ y: -6 }}
            />
          </VisualStack>
        </HeroVisual>
      </HeroSection>

      <HighlightsSection>
        <SectionHeader>
          <span className="eyebrow">홈케어 포인트</span>
          {/* <SectionTitle>요즘 스타일에 맞춘 깔끔한 소개 방식</SectionTitle>
          <SectionDescription className="section-copy">
            방문 전 필요한 정보만 먼저 보여주고, 복잡한 설명 대신 핵심 이점을
            카드 단위로 정리했습니다.
          </SectionDescription> */}
        </SectionHeader>

        <HighlightGrid>
          {serviceHighlights.map((item, index) => (
            <HighlightCard
              key={item.title}
              className="panel"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <HighlightIndex>
                {String(index + 1).padStart(2, "0")}
              </HighlightIndex>
              <HighlightTitle>{item.title}</HighlightTitle>
              <HighlightCopy>{item.copy}</HighlightCopy>
            </HighlightCard>
          ))}
        </HighlightGrid>
      </HighlightsSection>

      <ProcessSection>
        <SectionHeader>
          <span className="eyebrow">예약 절차</span>
          {/* <SectionTitle>처음 연락해도 흐름이 바로 보이도록</SectionTitle> */}
        </SectionHeader>

        <ProcessGrid>
          {processSteps.map((step, index) => (
            <ProcessCard
              key={step.id}
              className="panel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <StepBadge>{step.id}</StepBadge>
              <ProcessThumb src={step.image} alt={step.title} />
              <ProcessTitle>{step.title}</ProcessTitle>
              <ProcessDesc>{step.description}</ProcessDesc>
            </ProcessCard>
          ))}
        </ProcessGrid>
      </ProcessSection>

      <ContactSection
        className="panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <ContactCopyWrap>
          <span className="eyebrow">바로 연결</span>
          <ContactTitle>오늘 가능한 일정부터 빠르게 확인해보세요.</ContactTitle>
          <ContactDescription>
            전화 상담이 가장 빠르고, 카카오톡으로도 간단하게 문의하실 수
            있습니다.
          </ContactDescription>
        </ContactCopyWrap>

        <ContactButtons>
          <ContactButton className="primary-button" href="tel:010-9252-8119">
            전화 연결
          </ContactButton>
          <KakaoButton className="secondary-button" to="/qna">
            카카오톡 상담 안내
          </KakaoButton>
        </ContactButtons>
      </ContactSection>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 28px;

  @media (max-width: 768px) {
    padding-top: 18px;
  }
`;

const HeroSection = styled(motion.section)`
  display: grid;
  grid-template-columns: 1.1fr 0.95fr;
  gap: 28px;
  padding: 34px;
  margin-bottom: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding: 18px;
    border-radius: 24px;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const HeroTitle = styled.h1`
  max-width: 12ch;

  @media (max-width: 768px) {
    max-width: none;
  }
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const ActionButton = styled.a`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SecondaryActionButton = styled(Link)`
  text-decoration: none;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeroVisual = styled.div`
  display: grid;
  grid-template-columns: 1.05fr 0.85fr;
  gap: 16px;
  align-items: stretch;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const BaseVisual = styled(motion.img)`
  width: 100%;
  border-radius: 30px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow-md);

  @media (max-width: 768px) {
    border-radius: 22px;
  }
`;

const PrimaryVisual = styled(BaseVisual)`
  min-height: 100%;
  aspect-ratio: 0.95 / 1;

  @media (max-width: 960px) {
    aspect-ratio: 16 / 11;
  }

  @media (max-width: 640px) {
    aspect-ratio: 4 / 3;
  }
`;

const VisualStack = styled.div`
  display: grid;
  gap: 16px;
`;

const StackImage = styled(BaseVisual)`
  aspect-ratio: 4 / 3;

  @media (max-width: 640px) {
    aspect-ratio: 16 / 10;
  }
`;

const HighlightsSection = styled.section`
  margin-bottom: 28px;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 18px;
`;

const HighlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const HighlightCard = styled(motion.article)`
  padding: 28px;

  @media (max-width: 768px) {
    padding: 22px 18px;
  }
`;

const HighlightIndex = styled.span`
  display: inline-flex;
  margin-bottom: 18px;
  color: var(--primary-strong);
  font-size: 0.95rem;
  font-weight: 800;
`;

const HighlightTitle = styled.h3`
  font-size: 1.35rem;
  letter-spacing: -0.02em;
  margin-bottom: 10px;
`;

const HighlightCopy = styled.p`
  color: var(--text-muted);
  line-height: 1.7;
`;

const ProcessSection = styled.section`
  margin-bottom: 28px;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessCard = styled(motion.article)`
  position: relative;
  padding: 28px;

  @media (max-width: 768px) {
    padding: 22px 18px;
  }
`;

const StepBadge = styled.span`
  position: absolute;
  top: 22px;
  right: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 18px;
  background: var(--primary-soft);
  color: var(--primary-strong);
  font-weight: 800;

  @media (max-width: 768px) {
    top: 18px;
    right: 18px;
    width: 44px;
    height: 44px;
    border-radius: 16px;
    font-size: 0.88rem;
  }
`;

const ProcessThumb = styled.img`
  width: 92px;
  height: 92px;
  border-radius: 26px;
  object-fit: contain;
  padding: 10px;
  margin-bottom: 20px;
  background: #fff;
`;

const ProcessTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.28rem;
  letter-spacing: -0.02em;
`;

const ProcessDesc = styled.p`
  color: var(--text-muted);
  line-height: 1.7;
`;

const ContactSection = styled(motion.section)`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
  align-items: center;
  padding: 28px 30px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 24px;
  }

  @media (max-width: 768px) {
    padding: 20px 18px;
  }
`;

const ContactCopyWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ContactTitle = styled.h2`
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  letter-spacing: -0.03em;
`;

const ContactDescription = styled.p`
  color: var(--text-muted);
  line-height: 1.7;
`;

const ContactButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const ContactButton = styled.a`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const KakaoButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  @media (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 22px;
    height: 22px;
  }
`;

export default HomePage;
