type StyleForNavLinkProps = {
  isActive: Boolean;
};

export const setStyleForNavLink = ({ isActive }: StyleForNavLinkProps) =>
  isActive
    ? {
        cursor: 'default',
        textDecoration: 'none',
        color: '#f3b932',
      }
    : undefined;
