export type Blog = {
  id: string;
  title: string;
  content: string;
  tags: string[];
  published: boolean;
};

export const blog: Blog = {
  id: "b1",
  title: "Mastering TypeScript",
  content: "TypeScript makes JavaScript safer.",
  tags: ["typescript", "javascript", "frontend"],
  published: true,
};
