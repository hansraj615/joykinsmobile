export const createDrawerNavigator = () => {
  return {
    Navigator: ({ children }: any) => children,
    Screen: ({ children }: any) => children,
  } as any;
};

export const DrawerContentScrollView = ({ children }: any) => children;
export const DrawerItemList = ({ children }: any) => children;
export const DrawerItem = ({ label, onPress }: any) => null;
export type DrawerContentComponentProps = any;
