function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
  }
  
  const obj1 = { name: "Rakesh" };
  const obj2 = { age: 30 };
  
  const mergedObj = mergeObjects(obj1, obj2);
  console.log(mergedObj);
  