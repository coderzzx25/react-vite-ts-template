import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from '@/router';

interface IProps {
  children?: ReactNode;
}

const App: FC<IProps> = () => {
  return <div>{useRoutes(routes)}</div>;
};

export default memo(App);
