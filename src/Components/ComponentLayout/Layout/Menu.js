import React from 'react';
import {BsTable, BsFillBarChartFill, BsMap} from 'react-icons/bs';
import MenuOption from './MenuOption';
import useWindowDimensions from '../../../Helpers/useWindowDimension';

export default function Menu() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const menu = [
    {title: 'Table', route: '/table', Icon: BsTable},
    {title: 'Chart', route: '/chart', Icon: BsFillBarChartFill},
    {title: 'Map', route: '/map', Icon: BsMap},
  ];
  const {md} = useWindowDimensions();

  React.useEffect(() => {
    if (!md) {
      setOpen(false);
    }
  }, [md]);

  return (
    <ul className={`menu-container ${open ? 'open' : ''}`}>
      {menu.map((val, idx) => (
        <MenuOption key={idx} val={val} idx={idx} />
      ))}
    </ul>
  );
}
