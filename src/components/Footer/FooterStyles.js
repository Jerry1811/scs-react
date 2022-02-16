import styled from 'styled-components'

export const FooterWrapper = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  color: yellow;
  margin-top: 1000px;
`

export const MainFooter = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
  grid-template-columns: repeat(3, minmax(85px, 220px));
  gap: 40px;
  padding: 40px 0 28px;
  align-items: center;
  justify-content: center;
`

export const CopyrightInfo = styled.div`
  justify-content: center;
  align-self: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 20px;
`

export const CopyrightText = styled.span`
  padding-left: 5px;
`

export const ItemTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
  /* margin-bottom: 16px; */
`

export const ItemColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`

export const Item = styled.h5`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
  /* margin-bottom: 16px; */
  transition: 0.3s ease;
  position: relative;
  left: 0;
  display: inline;

  &:hover {
    color: #fff;
    left: 6px;
  }
`

export const HR = styled.hr`
  border: none;
  border-top: 3px double #333;
  color: greenyellow;
  overflow: visible;
  text-align: center;
  height: 5px;
  max-width: 20px;

  &::after {
    background: #fff;
    content: '§';
    padding: 0 4px;
    position: relative;
    top: -13px;
  }
`
