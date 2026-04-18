import styled from '@emotion/styled'

const Footer = () => {
  return (
    <FooterWrap>
      <FooterInner className="page">
        <Company>상호명 : 119 부부홈케어</Company>
        <Meta>대표자 : 안은영</Meta>
        <Copyright>Copyright(c)2025 YoonHyuk LIm All rights reserved.</Copyright>
      </FooterInner>
    </FooterWrap>
  )
}

const FooterWrap = styled.footer`
  position: relative;
  z-index: 1;
  padding: 0 20px 112px;

  @media (max-width: 768px) {
    padding: 0 14px 126px;
  }
`

const FooterInner = styled.div`
  padding: 24px 28px;
  margin-top: 12px;
  margin-bottom: 8px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(255, 255, 255, 0.76);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.05);
  backdrop-filter: blur(16px);
`

const Company = styled.p`
  color: var(--text);
  font-size: 0.98rem;
  font-weight: 800;
  letter-spacing: -0.02em;
`

const Meta = styled.p`
  margin-top: 8px;
  color: var(--text-muted);
  font-size: 0.94rem;
`

const Copyright = styled.p`
  margin-top: 10px;
  color: var(--text-soft);
  font-size: 0.88rem;
  line-height: 1.6;
`

export default Footer
