export default (a, b) => {
  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a === "string" && typeof b === "string") {
    return a === b;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }

    const result = a.reduce((acc, value, index)=> {
      return value !== b[index] ? false : true;
    }, true);

    return result;

  }
};
