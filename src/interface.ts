import type { CSSMotionProps } from 'rc-motion';
import type * as React from 'react';

export type CollapsibleType = 'header' | 'icon' | 'disabled';

export interface CollapseProps {
  prefixCls?: string;
  activeKey?: React.Key | React.Key[];
  defaultActiveKey?: React.Key | React.Key[];
  openMotion?: CSSMotionProps;
  onChange?: (key: React.Key | React.Key[]) => void;
  accordion?: boolean;
  className?: string;
  style?: object;
  destroyInactivePanel?: boolean;
  expandIcon?: (props: object) => React.ReactNode;
  collapsible?: CollapsibleType;
  children?: React.ReactNode;
}

export interface CollapsePanelProps extends React.DOMAttributes<HTMLDivElement> {
  id?: string;
  header?: string | React.ReactNode;
  prefixCls?: string;
  headerClass?: string;
  showArrow?: boolean;
  className?: string;
  style?: object;
  isActive?: boolean;
  openMotion?: CSSMotionProps;
  destroyInactivePanel?: boolean;
  accordion?: boolean;
  forceRender?: boolean;
  extra?: string | React.ReactNode;
  onItemClick?: (panelKey: string | number) => void;
  expandIcon?: (props: object) => React.ReactNode;
  panelKey?: string | number;
  role?: string;
  collapsible?: CollapsibleType;
  children?: React.ReactNode;
}
