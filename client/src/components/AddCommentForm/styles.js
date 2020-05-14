import styled from "styled-components";

export const FormContainer = styled.div`
  border-bottom: 2px solid black;
  padding: 16px;
`;

export const FormTitle = styled.h3`
  margin-bottom: 16px;
`;

export const TextInput = styled.input`
  display: block;
  width: 300px;
  padding: 8px;
  border-radius: 8px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  border: 2px solid black;
  margin-bottom: 16px;
`;

export const TextArea = styled.textarea`
  display: block;
  width: 300px;
  padding: 8px;
  border-radius: 8px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  border: 2px solid black;
  margin-bottom: 16px;
`;

export const FormButton = styled.button`
  padding: 16px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  background-color: black;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  margin-right: 16px;
  width: 320px;
`;
