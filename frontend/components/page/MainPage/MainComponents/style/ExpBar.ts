import styled from "styled-components";

export const ExpContainer = styled.div`
  display: flex;
  margin-top: 5%;
  height: 80%;
  justify-content: center;
  @media (max-width: 767px) {
    margin-top: 10%;
    @media (max-height: 736px) {
      margin-top: 5%;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    // 테블릿 세로
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    // 테블릿 가로
  }

  @media (min-width: 1200px) {
    // 데스크탑 일반
  }
`;
