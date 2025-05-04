function mergeArray<A>(arr1: A[], arr2: A[]): A[] {
    return Array.from(new Set([...arr1, ...arr2]));
  }
  
  const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4, 5, 6];
  
  const mergedArray = mergeArray(arr1, arr2);
  console.log(mergedArray);
  