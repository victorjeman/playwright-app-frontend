export type PermissionName =
  | 'project/read'
  | 'project/create'
  | 'project/update'
  | 'project/delete'
  | 'technology/read'
  | 'technology/create'
  | 'technology/update'
  | 'technology/delete'
  | 'permission/toggle'
  | 'role/read'
  | 'role/create'
  | 'role/update'
  | 'role/delete';

export interface Permission {
  id: number;
  name: PermissionName;
}

export interface NewRole {
  name: string;
  permissions: PermissionName[];
}

export interface Role {
  id: number;
  name: string;
  permissions: PermissionName[];
}

export interface UserRole {
  id: number;
  name: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
}

export interface ActiveUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}
