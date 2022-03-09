import styled from "styled-components";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>BLANX.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor minus
          veritatis aut? Dolor commodi cumque architecto blanditiis. Officiis
          qui nisi possimus, praesentium tempora totam iure omnis ullam quia
          ducimus deleniti.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FiFacebook />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <FiTwitter />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <FiInstagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <FiMapPin style={{ marginRight: "10px" }} />
          GhettoBlock 69
        </ContactItem>
        <ContactItem>
          <FiPhone style={{ marginRight: "10px" }} /> 076-6969690
        </ContactItem>
        <ContactItem>
          <FiMail style={{ marginRight: "10px" }} /> contact@blanx.com
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
