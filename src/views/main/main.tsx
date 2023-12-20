import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
}

const main: FC<IProps> = () => {
  return <div>main</div>;
};

export default memo(main);
