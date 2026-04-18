import styled from "@emotion/styled";
import { motion } from "framer-motion";
import advantage1 from "@assets/images/advantage1.png";
import advantage2 from "@assets/images/advantage2.png";
import advantage3 from "@assets/images/advantage3.png";

const AdvantagePage = () => {
  const advantages = [
    {
      id: 1,
      image: advantage1,
      title: "전문적인 기술력",
      description:
        "오랜 경험을 바탕으로 기기 상태에 맞는 분해 청소와 점검 흐름을 제공합니다.",
      features: ["전문 장비 사용", "숙련된 분해 세척", "작업 전후 상태 확인"],
    },
    {
      id: 2,
      image: advantage2,
      title: "합리적인 가격",
      description:
        "복잡한 옵션 대신 이해하기 쉬운 가격 구조로 상담 단계에서 바로 예산을 잡을 수 있습니다.",
      features: [
        "투명한 가격",
        "불필요한 추가 비용 최소화",
        "상담 단계에서 명확한 안내",
      ],
    },
    {
      id: 3,
      image: advantage3,
      title: "신속한 서비스",
      description:
        "연락부터 예약 확정까지 빠르게 이어지는 흐름으로 고객의 시간을 아껴드립니다.",
      features: [
        "빠른 일정 확인",
        "정시 방문 중심 운영",
        "작업 완료 후 마무리 안내",
      ],
    },
  ];

  return (
    <Container className="page">
      <span className="eyebrow">서비스 장점</span>

      <AdvantagesGrid>
        {advantages.map((advantage, index) => (
          <AdvantageCard
            key={advantage.id}
            className="panel"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <ImageContainer>
              <AdvantageImage src={advantage.image} alt={advantage.title} />
            </ImageContainer>

            <CardContent>
              <CardEyebrow>
                장점 {String(index + 1).padStart(2, "0")}
              </CardEyebrow>
              <CardTitle>{advantage.title}</CardTitle>
              <CardDescription>{advantage.description}</CardDescription>

              <FeatureList>
                {advantage.features.map((feature, idx) => (
                  <FeatureItem
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.2 + idx * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <FeatureIcon />
                    {feature}
                  </FeatureItem>
                ))}
              </FeatureList>
            </CardContent>
          </AdvantageCard>
        ))}
      </AdvantagesGrid>

      <CTASection
        className="panel"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <CTACopy>
          <span className="eyebrow">빠른 문의</span>
          <CTATitle>가격과 일정이 궁금하면 바로 연결하세요.</CTATitle>
          <CTADescription>
            복잡한 절차 없이 현재 가능한 방문 시간부터 안내해드립니다.
          </CTADescription>
        </CTACopy>
        <CTAButton
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="tel:010-9252-8119"
        >
          지금 연락하기
        </CTAButton>
      </CTASection>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 28px;

  @media (max-width: 768px) {
    padding-top: 18px;
  }
`;

const AdvantagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  margin-bottom: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const AdvantageCard = styled(motion.div)`
  overflow: hidden;
`;

const ImageContainer = styled.div`
  height: 230px;
  padding: 14px 14px 0;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const AdvantageImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 10;
  object-fit: contain;
  padding: 10px;
  background: linear-gradient(
    180deg,
    rgba(247, 250, 255, 0.92),
    rgba(255, 255, 255, 0.78)
  );
  border-radius: 26px;
`;

const CardContent = styled.div`
  padding: 24px 24px 28px;

  @media (max-width: 768px) {
    padding: 20px 18px 22px;
  }
`;

const CardEyebrow = styled.span`
  display: inline-flex;
  margin-bottom: 14px;
  color: var(--primary-strong);
  font-size: 0.88rem;
  font-weight: 800;
`;

const CardTitle = styled.h3`
  font-size: 1.45rem;
  margin-bottom: 12px;
  color: var(--text);
  letter-spacing: -0.03em;
`;

const CardDescription = styled.p`
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 18px;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  font-size: 0.96rem;
`;

const FeatureIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(135deg, #4fa7ff 0%, #1b64da 100%);
  box-shadow: 0 0 0 7px rgba(49, 130, 246, 0.12);
`;

const CTASection = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 28px 30px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 22px;
  }

  @media (max-width: 768px) {
    gap: 14px;
    padding: 20px 18px;
  }
`;

const CTACopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CTATitle = styled.h2`
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  letter-spacing: -0.03em;
`;

const CTADescription = styled.p`
  color: var(--text-muted);
  line-height: 1.7;
`;

const CTAButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 56px;
  padding: 0 24px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, #3b8cff 0%, #246beb 100%);
  box-shadow: 0 18px 34px rgba(49, 130, 246, 0.24);

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default AdvantagePage;
