export const setLocalStorageUser = (id: string, username: string) => {
  if (id) {
    const infor: any = { id, username };
    localStorage.setItem("user", id);
  } else {
    return false;
  }
};
