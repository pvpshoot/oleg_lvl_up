export default function equals (a, b) {
  if (typeof a !== typeof b) {
    return false;
  }

  if (typeof a === 'number' && typeof b === 'number') {
    return a === b;
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

  if (typeof a === 'object' && typeof b === 'object') {

    if(Object.keys(a).length === 0 && Object.keys(b).length === 0) {
      return true;
    }

    if(Object.keys(a).length !== Object.keys(b).length) {
      return false;
    }

    let result = true;
    for (let key in a) {
      if (!equals(a[key], b[key])) {
        result = false;
      }
    }

    return result;
  }

};
