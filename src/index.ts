interface IBookData {
  category: string;
  author: string;
  title: string;
  price: number;
  isbn?: string;
}
interface Idata {
  store: {
    book: IBookData[];
    bicycle: {
      color: string;
      price: number;
    };
  };
}

const data: Idata = {
  store: {
    book: [
      {
        category: "reference",
        author: "Nigel Rees",
        title: "Sayings of the Century",
        price: 8.95,
      },
      {
        category: "fiction",
        author: "Evelyn Waugh",
        title: "Sword of Honour",
        price: 12.99,
      },
      {
        category: "fiction",
        author: "Herman Melville",
        title: "Moby Dick",
        isbn: "0-553-21311-3",
        price: 8.99,
      },
      {
        category: "fiction",
        author: "J.R.R. Tolkien",
        title: "The Lord of the Rings",
        isbn: "0-395-19395-8",
        price: 22.99,
      },
    ],
    bicycle: {
      color: "red",
      price: 19.95,
    },
  },
};

console.log("data", data);

const data1: Idata = {
  store: {
    book: [
      {
        title: "test title",
        author: "Rakesh",
        category: "category1",
        price: 13.22,
      },
    ],
    bicycle: {
      color: "green",
      price: 23.11,
    },
  },
};

console.log("data1", data1);
