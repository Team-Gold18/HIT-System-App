import styled from "styled-components";
import { Link} from "react-router-dom";

const FrontPage = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          {/* <CTALogoOne src="/images/cta-logo-one.svg" /> */}
          <SignUp>
          <Link to="/register"> 
            Register
          </Link>
          </SignUp>
          <br />
          <SignIn>
          <Link to="/login"> 
          Login
          </Link>
          </SignIn>
          {/* <Description>
          </Description> */}
          {/* <CTALogoTwo src="/images/cta-logo-two.png" /> */}
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 100vw;
  width: 100%;
  height: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("/images/bg.jpeg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const CTALogoOne = styled.img`
//   margin-bottom: 12px;
//   max-width: 600px;
//   min-height: 1px;
//   display: block;
//   width: 100%;
// `;

const SignUp = styled.a`
  width: 50%;
  font-weight: bold;
  color: #f9f9f9;
  background-color: #3bb19b;
  margin-bottom: 12px;
  letter-spacing: 1.2px;
  font-size: 18px;
  font-color: white;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    background-color: #0483ee;
  }
`;
const SignIn = styled.a`
  width: 50%;
  font-weight: bold;
  color: #f9f9f9;
  background-color: #3bb19b;
  margin-bottom: 12px;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transition: 0.2s;
    background-color: #0483ee;
  }
`;
// const Description = styled.p`
//   color: hsla(0, 0%, 95.3%, 1);
//   font-size: 16px;
//   margin: 0 0 24px;
//   line-height: 1.5;
//   letter-spacing: 1.5px;
// `;

// const CTALogoTwo = styled.img`
//   margin-bottom: 12px;
//   max-width: 600px;
//   min-height: 1px;
//   display: inline-block;
//   vertical-align: bottom;
//   width: 100%;
// `;

export default FrontPage;