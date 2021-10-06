import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  Socialcon,
  SocialContainer,
  Title,
} from "./style";
import paymentImg from "../../imgs/payment.png";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          adipisci nemo ipsum voluptates, autem iusto veritatis vitae voluptatum
          hic inventore nihil fugiat quae quis laboriosam magni. A ea nihil
          ipsum.
        </Desc>
        <SocialContainer>
          <Socialcon color="3B5999">
            <Facebook />
          </Socialcon>
          <Socialcon color="E4405F">
            <Instagram />
          </Socialcon>
          <Socialcon color="55ACEE">
            <Twitter />
          </Socialcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Gwangjingu, Seoul, South
          Korea
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +8010 0000 0000
        </ContactItem>{" "}
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} /> contact@mail.ru
        </ContactItem>
        <Payment src={paymentImg} />
      </Right>
    </Container>
  );
};

export default Footer;
