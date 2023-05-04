import styled from "styled-components";

// export const GlobalContainer = styled.div`
//   display: flex;
//   align-items: center;
//   box-sizing: border-box;
//   padding-inline: 50px;
// `;

export const Container = styled.main`
  min-width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 74%;
    border-radius: 5px;
  }

  .main-image:hover {
    transition: 0.5s;
    -webkit-box-shadow: 1px 2px 28px 4px rgba(0, 53, 102, 1);
    -moz-box-shadow: 1px 2px 28px 4px rgba(0, 53, 102, 1);
    box-shadow: 1px 2px 28px 4px rgba(0, 53, 102, 1);
  }

  .rating {
    font-family: "Vina Sans", cursive;
    font-size: 28px;
    color: #ffc300;
    text-align: start;
    width: 100%;
    padding-inline-start: 205px;
    margin-bottom: 10px;
  }

  .overview {
    text-align: start;
    width: 80%;
    padding-inline-start: 50px;
    margin-bottom: 10px;
    font-family: "Vina Sans", cursive;
    letter-spacing: 1px;
    font-size: 22px;
    color: #0466c8;
  }

  > h1 {
    width: 80vw;
    text-align: start;
    padding: 30px;
    padding-inline-start: 50px;
    font-family: "Vina Sans", cursive;
    font-weight: 400;
    letter-spacing: 2px;
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80vw;

    gap: 50px;
    font-family: "Vina Sans", cursive;
    font-weight: 400;
    letter-spacing: 1px;

    > li {
      display: flex;
      flex-direction: column;
      width: 250px;
    }
  }

  .input-area {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;

    > input {
      width: 60%;
      height: 60px;
      font-size: 24px;
      padding-inline-start: 10px;
      background-color: transparent;
      border: 1px solid #003566;
      -webkit-box-shadow: 1px 2px 28px -2px rgba(0, 53, 102, 1);
      -moz-box-shadow: 1px 2px 28px -2px rgba(0, 53, 102, 1);
      box-shadow: 1px 2px 28px -2px rgba(0, 53, 102, 1);
      border-radius: 10px 0px 0px 10px;
      color: #0466c8;
      border-right: none;

      &:focus {
        outline: none;
        border: 1px solid #003566;
        -webkit-box-shadow: 1px 2px 28px -2px rgba(0, 53, 102, 1);
        -moz-box-shadow: 1px 2px 28px -2px rgba(0, 53, 102, 1);
        box-shadow: 1px 2px 28px -2px rgba(0, 53, 102, 1);

        border-right: none;
      }
    }

    > button {
      width: 100px;
      height: 60px;
      border-radius: 0px 10px 10px 0px;

      background-color: transparent;
      border: 1px solid #003566;
      -webkit-box-shadow: 1px 2px 28px -2px rgba(0, 53, 102, 1);
      -moz-box-shadow: 1px 2px 28px -2px rgba(0, 53, 102, 1);
      box-shadow: 1px 2px 28px -2px rgba(0, 53, 102, 1);
      color: #0466c8;

      border-left: none;
      box-sizing: border-box;
      padding: 5px;
      cursor: pointer;
      font-family: "Vina Sans", cursive;
      font-weight: 400;
      font-size: 18px;

      &:hover {
        transition: 1s;
        letter-spacing: 1px;
      }
    }
  }

  @media (max-width: 824px) {
    > h1 {
      font-size: 28px;
      padding: 0;
      margin: 10px;
    }
  }
`;

export const Header = styled.header`
  width: 90vw;
  height: 90px;
  background-color: transparent;

  margin-top: 25px;
  border-radius: 0px 5px 15px 0px;

  -webkit-box-shadow: 1px 2px 28px -2px rgba(0, 53, 102, 1);
  -moz-box-shadow: 1px 2px 28px -2px rgba(0, 53, 102, 1);
  box-shadow: 1px 2px 28px -2px rgba(0, 53, 102, 1);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 50px;

  color: #ffc300;
  font-weight: 550;
  font-size: 22px;
  font-family: "Vina Sans", cursive;

  @media (max-width: 824px) {
    padding-inline: 10px;
    font-size: 20px;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 3px;

    > svg {
      width: 30px;
      height: 30px;

      @media (max-width: 824px) {
        width: 23px;
        height: 23px;
      }
    }

    &&:hover {
      transition: 2s;
      letter-spacing: 1px;
    }
  }

  > h2 {
    color: #ffc300;
    font-weight: 550;
    font-size: 36px;
    font-family: "Vina Sans", cursive;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 10px;

    cursor: pointer;
  }

  @media (max-width: 824px) {
    > h2 {
      font-size: 20px;
    }
  }
`;
