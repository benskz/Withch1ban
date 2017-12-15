const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

const getUserIdFromCookie = () => {
  const name = "userId=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for(let i = 0; i < ca.length; i += 1) {
    let c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return "";
}

const generateUserIdCookie = () => {
  const id = uuid();
  const date = new Date();
  date.setTime(date.getTime() + (365*24*60*60*1000));
  const expires = "expires="+ date.toUTCString();
  document.cookie = "userId=" + id + ";" + expires + ";path=/";
  return id;
}

const userId = getUserIdFromCookie() ? getUserIdFromCookie() : generateUserIdCookie();

export default userId;
