import { FC, ReactElement } from 'react';
import Container from 'react-bootstrap/Container';

export const MainLayout: FC<{ children: ReactElement }> = ({ children }) => <main>{children}</main>;
