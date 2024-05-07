export interface CellProps {
  icon: string;
  title: string;
  title_en: string;
  path: string;
}

export interface CellBoxProps {
  groupName: string;
  groupName_en: string;
  list: CellProps[];
}
