import styled from 'styled-components';
import { CenteredFlex, NativeLayout } from './common.styled';

export const StyledMobileMenu = styled(CenteredFlex)`
  flex-direction: column;
  margin-bottom: 16px;
`

export const StyledMobileMenuButtons = styled(NativeLayout)`
  & > div:first-child {
    margin-right: 16px;
  }
  display: inline-flex;
  margin-bottom: 12px;
`

export const StyledMobileMenuButton = styled.div<{$active: boolean}>`
  color: ${props => props.$active ? props.theme.colors.white : props.theme.colors.filterText};
    background-color: ${props => props.$active ? props.theme.colors.primary : props.theme.colors.white};
    font-weight: 400;
    padding: 4px 8px;
    border-radius: ${props => props.theme.dimensions.borderRadius};
`

export const StyledMobileMenuMask = styled.div<{ $visible: boolean }>`
  height: ${props => props.$visible ? 'auto' : 0 };
  overflow: hidden;
`