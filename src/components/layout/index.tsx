import styled from 'styled-components';

export const row = styled.div<{
  justify?: 'flex-start' | 'flex-end' | 'center';
  align?: 'flex-start' | 'flex-end' | 'center';
  isColumn?: boolean;
}>`
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
  direction: ${({ isColumn }) => (isColumn ? 'column' : 'row')}; ;
`;

export const Layout = styled.div<{
  template?: string;
  justify?: 'flex-start' | 'flex-end' | 'center';
  align?: 'flex-start' | 'flex-end' | 'center';
}>`
  display: grid;
  grid-template-columns: ${({ template }) => template || '1fr'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
`;
