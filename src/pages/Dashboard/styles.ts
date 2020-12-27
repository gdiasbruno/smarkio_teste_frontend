import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const Form = styled.form``;

export const Repositories = styled.div``;

export const Main = styled.div`
  display: flex;
  width: 100%;
`;

export const Comment = styled.div`
  margin-right: 15px;
  width: 100%;
  min-width: 400px;

  textarea {
    width: 100%;
  }

  button {
    width: 100%;
    height: 50px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Comments = styled.div`
  width: 100%;
  min-width: 400px;
`;

export const Display = styled.div`
  display: flex;

  margin-bottom: 10px;

  p {
    width: 400px;
    border-right: 10px;
  }

  button {
    width: 110px;
    height: 30px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;
