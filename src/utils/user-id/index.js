export const uuid = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export const getUserIdFromCookie = () => {
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

export const generateUserIdCookie = () => {
  const id = uuid();
  const d = new Date();
  d.setTime(d.getTime() + (365*24*60*60*1000));
  const expires = "expires="+ d.toUTCString();
  document.cookie = "userId=" + id + ";" + expires + ";path=/";
  return id;
}

export const userId = getUserIdFromCookie() ? getUserIdFromCookie() : generateUserIdCookie();

export default userId;
