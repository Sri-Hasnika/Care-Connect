interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'doctor';
  password: string;
}

const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'patient@example.com',
    password: 'password123',
    role: 'patient'
  },
  {
    id: '2',
    name: 'Dr. Sarah Smith',
    email: 'doctor@example.com',
    password: 'password123',
    role: 'doctor'
  }
];

if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(mockUsers));
}

export const login = (email: string, password: string): User | null => {
  const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return user;
  }
  return null;
};

export const signup = (userData: Omit<User, 'id'>): User | null => {
  const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  

  if (users.some(u => u.email === userData.email)) {
    return null;
  }

  const newUser: User = {
    ...userData,
    id: Math.random().toString(36).substr(2, 9)
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('currentUser', JSON.stringify(newUser));
  
  return newUser;
};

export const logout = () => {
  localStorage.removeItem('currentUser');
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};