import React from 'react';
import { styled } from 'twin.macro';

type SidebarProps = {
  sidebarContent: React.ReactNode;
  children: React.ReactNode;
  width?: string;
};

const SidebarContainer = styled('div')({
  padding: 0,
  margin: 0,
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
});

const Row = styled('div')({
  display: 'flex',
  // alignItems: 'stretch',
  gap: '1rem',
});

const Sidebar: React.FC<SidebarProps> = ({
  sidebarContent,
  width = '25%',
  children,
}) => {
  return (
    <SidebarContainer className="flex-1">
      <Row className="flex w-full max-w-screen-xl">
        <div className="sidebar-content" style={{ width }}>
          {sidebarContent}
        </div>
        <div
          className="main-content flex-1 basis-full bg-white pt-16"
          style={{ border: '3px solid black' }}
        >
          {children}
        </div>
      </Row>
    </SidebarContainer>
  );
};

export default Sidebar;
