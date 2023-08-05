import styled from "styled-components";

const StyledSidebarContainer = styled.div`
  flex: 0 0 350px;
  min-width: 350px;
  padding-top: 24px;
  margin-bottom: 3rem;
  // border: 3px solid red;
  background: white;
  @media only screen and (max-width: 1023px) {
    display: block;
    display: ${(props) => (props?.hideAd ? "none" : "block")};
  }
`;

const AdSidebar = ({ hideAd }) => {
  return (
    <StyledSidebarContainer hideAd={hideAd}>
      {/* AD Sidebar component */}
    </StyledSidebarContainer>
  );
};

export default AdSidebar;
