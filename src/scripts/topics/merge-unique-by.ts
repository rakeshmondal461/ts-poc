function mergeUniqueBy<T, K extends keyof T>(
    arr1: T[],
    arr2: T[],
    key: K
  ): T[] {
    const seen = new Set<T[K]>();
    const result: T[] = [];
  
    for (const item of [...arr1, ...arr2]) {
      if (!seen.has(item[key])) {
        seen.add(item[key]);
        result.push(item);
      }
    }
  
    return result;
  }
  
  const users1 = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  
  const users2 = [
    { id: 2, name: "Robert" },
    { id: 3, name: "Charlie" },
  ];
  
  const merged = mergeUniqueBy(users1, users2, "id");
  console.log(merged);
  