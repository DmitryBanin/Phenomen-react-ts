type StyleForNavLinkProps = {
  isActive: Boolean;
};

export const getStyleForNavLink = ({ isActive }: StyleForNavLinkProps) =>
  isActive
    ? {
        cursor: 'default',
        textDecoration: 'none',
        color: 'inherit',
      }
    : undefined;
