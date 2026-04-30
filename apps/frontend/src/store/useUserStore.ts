import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserStore {
  user: User;
}

export const useUserStore = create<UserStore>(() => ({
  user: {
    id: 'user-001',
    name: 'User',
    email: 'user@email.com',
  },
}));
