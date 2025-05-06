type User = {
  id: string;
  name: string;
  password: string;
};

type SafeUser = Omit<User, "password">;

const safeuser: SafeUser = {
  id: "123",
  name: "Rakesh",
  // password is omitted
};