import styled from "styled-components";

export const TableWrapper = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
`;
export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  color: white;
  font-weight: bold;
`;

export const TableBody = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  background-color: white;
  color: #4a3b36;
  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const TableBodyCell = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  gap: 5px;
`;

export const TableHeaderCell = styled.div`
  display: flex;
  border-radius: 16px 16px 0 0;
  background-color: #7d5a50;
  color: white;
  padding: 10px;
  align-items: center;
  gap: 5px;
`;
