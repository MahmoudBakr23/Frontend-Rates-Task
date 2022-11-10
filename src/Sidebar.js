import React from 'react'
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import PlayLessonOutlinedIcon from '@mui/icons-material/PlayLessonOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { SidebarContainer, SidebarList, SidebarListItem, Logo } from './Styles/Sidebar.styled';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <div>
            <Logo>Logo Here</Logo>
        </div>
        <SidebarList>
          <SidebarListItem>
            <CastForEducationOutlinedIcon /> Tutors
          </SidebarListItem>
          <SidebarListItem>
            <GTranslateOutlinedIcon /> Languages
          </SidebarListItem>
          <SidebarListItem>
            <PlayLessonOutlinedIcon /> Lessons
          </SidebarListItem>
          <SidebarListItem>
            <QueryStatsOutlinedIcon /> Statistics
          </SidebarListItem>
          <SidebarListItem>
            <ShoppingCartOutlinedIcon /> Shopping Cart
          </SidebarListItem>
        </SidebarList>
    </SidebarContainer>
  )
}

export default Sidebar