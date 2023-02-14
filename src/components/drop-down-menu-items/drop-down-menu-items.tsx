import DropDownMenu from '../drop-down-menu/drop-down-menu';

type DropDownMenuProps = {
  dropDownMenuData: string[];
};

function DropDownMenuItems({ dropDownMenuData }: DropDownMenuProps) {
  return (
    <ul className='menu__options menu__options-about'>
      {dropDownMenuData.map((data) => (
        <DropDownMenu key={data} data={data} />
      ))}
    </ul>
  );
}

export default DropDownMenuItems;
