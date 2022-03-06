import {
  FooterWrapper,
  MainFooter,
  CopyrightInfo,
  CopyrightText,
  Item,
  ItemColumn,
  ItemTitle,
} from './FooterStyles'

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <MainFooter>
          <ItemColumn>
            <ItemTitle>Helpful Links</ItemTitle>
            <Item href="#">Why choose us</Item>
            <Item href="#">Our Services</Item>
            <Item href="#">About Us</Item>
          </ItemColumn>
          <ItemColumn>
            <ItemTitle>Footer Item one</ItemTitle>
            <Item>Item</Item>
            <Item>Item 2</Item>
          </ItemColumn>
          <ItemColumn>
            <ItemTitle>Footer Item one</ItemTitle>
            <Item>Item</Item>
            <Item>Item 2</Item>
          </ItemColumn>
        </MainFooter>
        <hr
          style={{
            border: 'none',
            borderTop: '3px double #333',
            color: '#333',
            overflow: 'visible',
            textAlign: 'center',
            height: '5px',
            marginLeft: '100px',
            marginRight: '100px',
          }}
        />
        <CopyrightInfo>
          &copy; Copyright {new Date().getFullYear()}
          <CopyrightText>| Designed for Spotless Cleaning Services</CopyrightText>
        </CopyrightInfo>
      </FooterWrapper>
    </>
  )
}

export default Footer
