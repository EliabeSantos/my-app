import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  display: flex;
`;

export const InputContainer = styled.section`
  width: 400px;
  margin: 10px auto;
  display: grid;
  gap: 1rem;
  flex-direction: column;

  button {
    height: 40px;
    font-size: 18px;
    background-color: #411187;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    :hover {
      background-color: #d4b987;
      color: black;
    }
  }
`;

export const InputList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    all: unset;
    width: calc(100% - 60px);
    border: 2px solid #d4b987;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
  }
  #number {
    all: unset;
    width: 40px;
    border: 2px solid #d4b987;
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;
  }
  > button {
    width: 30px;
    border-radius: 50%;
    height: 30px;
    margin-left: auto;
  }
`;

export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    h1 {
      font-size: 20px;
    }
    > div {
      padding: 5px;
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(5, 1fr);
      > div {
        position: relative;
      }
    }
    video {
      height: 100%;
      width: 100%;
    }
  }
`;

export const List = styled.div`
  /* width: fit-content; */
  height: 100vh;
  min-width: 16rem;
  background-color: #ccc;
  color: black;
  padding: 10px;
  p {
    margin: 0;
    margin-right: 5px;
    display: flex;
    button {
      margin-left: auto;
    }
  }
`;

export const ContentContainer = styled.div`
  display: block;
  width: 100%;
`;

interface downloadButton {
  clicked?: boolean;
}

export const DownloadButton = styled.button<downloadButton>`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${(props) => (props.clicked ? "red" : "green")};
  border: none;
`;

export const ExcludeButton = styled.button<downloadButton>`
  position: absolute;
  top: 0;
  right: 20px;
  border-radius: 50%;
  background-color: red;
  border: none;
  width: 20px;
  height: 20px;
  font-size: 11px;
  cursor: pointer;
`;
