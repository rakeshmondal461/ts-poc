export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export const userResponse: ApiResponse<{
  id: number;
  name: "Rakesh";
}> = {
  success: true,
  data: {
    id: 101,
    name: "Rakesh",
  },
};
