import { styled } from 'styled-components';

export const St = {
  Header: styled.header`
    width: 100vw;
    height: 80px;
    background-color: skyblue;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  MenuWrapper: styled.div`
    display: flex;
  `,
  Img: styled.img`
    background-color: white;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    cursor: pointer;
    margin-left: 10px;
  `,
  LogoWrapper: styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `,
  Logo: styled.div`
    text-align: center;
    cursor: pointer;
    font-weight: 600;
    font-size: 25px;
  `,

  HeaderMenu: styled.div`
    cursor: pointer;
    margin-left: 10px;
  `,
  HeaderMenu2: styled.div`
    cursor: pointer;
    padding: 1px 6px;
    font-size: 0.8333rem;
    display: flex;
    align-items: center;
    margin-left: 10px;
  `,
  Nickname: styled.div`
    cursor: pointer;
    font-size: 0.8333rem;
    display: flex;
    align-items: center;
    margin-left: 5px;
  `
};
