import { useCallback, useEffect, useState } from 'react';
import useAuth from '../useAuth';

const general = [
  {
    name: 'Historiales',
    to: '/historiales',
  },
];

const rolesLinks = {
  1: [
    {
      name: 'Hospital',
      to: '/hospital',
    },
  ],
  2: [
    {
      name: 'Registro',
      to: '/registro',
    },
  ],
  3: [
    {
      name: 'Informe',
      to: '/informe',
    },
    ...general,
  ],
  4: general,
};

const homeLink = [
  {
    name: 'Inicio',
    to: '/',
  },
];

const useNavLinks = () => {
  const { auth } = useAuth();
  const [Links, setLinks] = useState([]);
  const update = useCallback(() => {
    if (auth.roles[0] !== 5) {
      const newLinks = [...homeLink, ...rolesLinks[auth.roles[0]]];
      setLinks(newLinks);
    }
  }, [auth?.roles]);

  useEffect(() => {
    update();
  }, [update]);

  return {
    Links,
  };
};

export default useNavLinks;
