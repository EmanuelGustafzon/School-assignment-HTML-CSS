const lsGetItem = (item) => {
    const foundItem = localStorage.getItem(item);
    console.log(foundItem)
    return foundItem ? foundItem : null;
}
const lsSetItem = (key, value) => {
    localStorage.setItem(key, value);
    const setValue = lsGetItem(key);
    return setValue === value ? 'success' : new Error(`failed to store ${key, value} in local storage`);
}