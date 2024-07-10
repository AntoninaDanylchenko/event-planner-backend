enum Roles {
  admin = "admin",
  author = "author",
  editor = "editor",
}

interface Role {
  role: Roles;
}

enum PermissionList {
  read = "read",
  write = "write",
  execute = "execute",
}

interface UserPermissions {
  permission: PermissionList[];
}

interface User {
  name: string;
  email: string;
  phone: number;
  gender?: string;
}

interface AdminUser extends User, Role, UserPermissions {
  numberOfUsers: number;
}

interface UserWithAddress extends User {
  address: string;
}

const user: User = {
  name: "t",
  email: "jhgsvnjkj",
  phone: 67587979,
  gender: "male",
};

const user2: UserWithAddress = {
  name: "T",
  email: "kjgjh",
  phone: 87657890,
  gender: "female",
  address: "This is the address",
};

const rob: AdminUser = {
  name: "Rob",
  email: "Rob@",
  phone: 3546843,
  role: Roles.admin,
  permission: [
    PermissionList.execute,
    PermissionList.read,
    PermissionList.write,
  ],
  numberOfUsers: 6,
};
