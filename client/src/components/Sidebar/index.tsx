import * as S from './styles';
import { VList } from '../index';
import Link from 'next/link';
import { navigation } from '../../data/navigation';

const Sidebar = () => (
  <S.Wrapper>
    <nav>
      <VList>
        {navigation.map((navElem) => (
          <ul key={navElem.label}>
            <Link href={navElem.href}>{navElem.label}</Link>
          </ul>
        ))}
      </VList>
    </nav>
  </S.Wrapper>
);

export default Sidebar;
