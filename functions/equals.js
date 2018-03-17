export default (a, b) => {
  if (typeof a === "string" && typeof b === "string") {
    return a === b;
  }
  
  if (Array.isArray(a) && Array.isArray(b)) {
    return a.join() === b.join();
  }
};
