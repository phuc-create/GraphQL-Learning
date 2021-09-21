export const setLocalStorageUser = (id: string, _username: string) => {
  if (id) {
    localStorage.setItem("user", id);
  } else {
    return false;
  }
};
