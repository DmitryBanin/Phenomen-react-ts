import DropDownMenu from '../drop-down-menu/drop-down-menu';

type DropDownMenuItemsProps = {
  dropDownMenuData: string[];
};

function DropDownMenuItems({ dropDownMenuData }: DropDownMenuItemsProps) {
  return (
    <ul className='menu__options menu__options-about'>
      {dropDownMenuData.map((data) => (
        <DropDownMenu key={data} data={data} />
      ))}
    </ul>
  );
}

export default DropDownMenuItems;
