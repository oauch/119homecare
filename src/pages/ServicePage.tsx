import styled from "@emotion/styled";
import { motion } from "framer-motion";
import price1 from "@assets/images/price1.png";
import price2 from "@assets/images/price2.png";

const ServicePage = () => {
  const services = [
    {
      id: 1,
      image: price1,
      title: "에어컨 청소",
      price: "80,000원",
      originalPrice: "120,000원",
      features: [
        "실내기 완전 분해 청소",
        "필터 교체 및 청소",
        "배수관 청소",
        "항균 코팅 서비스",
      ],
      popular: true,
    },
    {
      id: 2,
      image: price2,
      title: "세탁기 청소",
      price: "60,000원",
      originalPrice: "90,000원",
      features: [
        "드럼 내부 완전 청소",
        "세제통 분해 청소",
        "배수구 청소",
        "곰팡이 제거",
      ],
      popular: false,
    },
  ];

  return (
    <Container className="page">
      {/* <HeroSection
        className="panel"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroImage src={serviceImg} alt="서비스 이미지" />
        <HeroOverlay />
        <HeroContent
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="eyebrow">가격 안내</span>
          <HeroTitle>한눈에 비교되는 가격 카드로 바꿨습니다.</HeroTitle>
          <HeroSubtitle>
            에어컨과 세탁기 청소 가격을 둥글고 명료한 카드 UI로 정리해 비교가 더
            쉬워졌습니다.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection> */}

      <PriceSection>
        <PriceGrid>
          {services.map((service, index) => (
            <PriceCard
              key={service.id}
              className="panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              $popular={service.popular}
            >
              {service.popular && <PopularBadge>인기</PopularBadge>}

              <ImageFrame>
                <ServiceImage src={service.image} alt={service.title} />
              </ImageFrame>

              <CardContent>
                {service.popular && (
                  <CardTop>
                    <CardTag>{"가장 많이 선택"}</CardTag>
                  </CardTop>
                )}
                <ServiceTitle>{service.title}</ServiceTitle>

                {/* <PriceContainer>
                  <CurrentPrice>{service.price}</CurrentPrice>
                  <OriginalPrice>{service.originalPrice}</OriginalPrice>
                </PriceContainer> */}

                <FeatureList>
                  {service.features.map((feature, idx) => (
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

                <BookButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="tel:010-9252-8119"
                >
                  예약하기
                </BookButton>
              </CardContent>
            </PriceCard>
          ))}
        </PriceGrid>
      </PriceSection>

      <BenefitRibbon className="panel">
        <RibbonItem>
          <RibbonLabel>작업 시간</RibbonLabel>
          <RibbonValue>약 1~2시간</RibbonValue>
        </RibbonItem>
        {/* <RibbonItem>
          <RibbonLabel>예약 혜택</RibbonLabel>
          <RibbonValue>사전 문의 시 10% 할인</RibbonValue>
        </RibbonItem> */}
        {/* <RibbonItem>
          <RibbonLabel>A/S 보장</RibbonLabel>
          <RibbonValue>30일 보장 안내</RibbonValue>
        </RibbonItem> */}
      </BenefitRibbon>

      <InfoSection
        className="panel"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <InfoTitle>서비스 안내사항</InfoTitle>
        <InfoList>
          <InfoItem>
            모든 서비스는 전문 장비와 곰팡이 전용 세제를 사용합니다.
          </InfoItem>
          <InfoItem>
            작업 시간은 기기 상태에 따라 다르며 보통 1~2시간 정도 소요됩니다.
          </InfoItem>
          <InfoItem>
            사전 예약 시 일정 가능 여부와 할인 적용 여부를 함께 안내합니다.
          </InfoItem>
          {/* <InfoItem>
            A/S 보장 기간은 30일이며 작업 후 문제가 있으면 재안내해드립니다.
          </InfoItem> */}
          <InfoItem>안산시 전 지역 출장 서비스가 가능합니다.</InfoItem>
        </InfoList>
      </InfoSection>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 28px;

  @media (max-width: 768px) {
    padding-top: 18px;
  }
`;

const PriceSection = styled.section`
  margin-bottom: 28px;
`;

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const PriceCard = styled(motion.div)<{ $popular: boolean }>`
  position: relative;
  overflow: hidden;
  box-shadow: ${(props) =>
    props.$popular ? "var(--shadow-lg)" : "var(--shadow-md)"};
  border: ${(props) =>
    props.$popular
      ? "1px solid rgba(49, 130, 246, 0.22)"
      : "1px solid rgba(255,255,255,0.72)"};
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 22px;
  right: 22px;
  background: linear-gradient(135deg, #3b8cff 0%, #246beb 100%);
  color: white;
  padding: 10px 14px;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 800;
  z-index: 2;

  @media (max-width: 768px) {
    top: 18px;
    right: 18px;
    padding: 8px 12px;
  }
`;

const ImageFrame = styled.div`
  padding: 14px 14px 0;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: contain;
  padding: 12px;
  background: linear-gradient(
    180deg,
    rgba(247, 250, 255, 0.92),
    rgba(255, 255, 255, 0.78)
  );
  border-radius: 26px;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

const CardContent = styled.div`
  padding: 24px 24px 28px;

  @media (max-width: 768px) {
    padding: 20px 18px 22px;
  }
`;

const CardTop = styled.div`
  margin-bottom: 10px;
`;

const CardTag = styled.span`
  display: inline-flex;
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--primary-soft);
  color: var(--primary-strong);
  font-size: 0.82rem;
  font-weight: 800;
`;

const ServiceTitle = styled.h3`
  font-size: 1.55rem;
  margin-bottom: 12px;
  color: var(--text);
  letter-spacing: -0.03em;
`;

const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 24px;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
`;

const FeatureIcon = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: linear-gradient(135deg, #4fa7ff 0%, #1b64da 100%);
  box-shadow: 0 0 0 7px rgba(49, 130, 246, 0.12);
`;

const BookButton = styled(motion.a)`
  display: block;
  text-align: center;
  padding: 1rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 800;
  background: linear-gradient(135deg, #3b8cff 0%, #246beb 100%);
  color: white;
  box-shadow: 0 18px 34px rgba(49, 130, 246, 0.24);
`;

const BenefitRibbon = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 14px;
  padding: 18px;
  margin-bottom: 28px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const RibbonItem = styled.div`
  padding: 18px 20px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(17, 24, 39, 0.06);

  @media (max-width: 768px) {
    padding: 16px 18px;
  }
`;

const RibbonLabel = styled.div`
  font-size: 0.88rem;
  color: var(--text-soft);
  margin-bottom: 8px;
`;

const RibbonValue = styled.div`
  font-size: 1.04rem;
  font-weight: 800;
  color: var(--text);
  letter-spacing: -0.02em;
`;

const InfoSection = styled(motion.section)`
  padding: 28px;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    padding: 20px 18px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.6rem;
  margin-bottom: 18px;
  color: var(--text);
  letter-spacing: -0.03em;
`;

const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const InfoItem = styled.div`
  padding: 18px 20px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(17, 24, 39, 0.06);
  color: var(--text-muted);
  line-height: 1.7;

  @media (max-width: 768px) {
    padding: 16px 18px;
  }
`;

export default ServicePage;
