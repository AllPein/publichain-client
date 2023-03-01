import styled from 'styled-components';

const Header = styled.div`
  padding: 0.8rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  background: ${(props) => props.theme.color.primary3};
  box-shadow: 0 0.3rem 1.9rem ${(props) => props.theme.color.grayscale1};

  & span.ant-badge {
    top: 0.6rem;
  }

  & .ant-badge-count {
    right: -20%;
    top: -25%;
  }
`;

const StyledLogoSearch = styled.div``;

const StyledProfileUpload = styled.div``;

export { Header, StyledLogoSearch, StyledProfileUpload };
