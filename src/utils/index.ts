import moment from "moment";

export function getToken(): string {
  return window.localStorage.getItem("playedu-backend-token") || "";
}

export function setToken(token: string) {
  window.localStorage.setItem("playedu-backend-token", token);
}

export function clearToken() {
  window.localStorage.removeItem("playedu-backend-token");
}

export function dateFormat(dateStr: string) {
  return moment(dateStr).format("YYYY-MM-DD HH:mm");
}

export function durationFormat(dateStr: number) {
  var d = moment.duration(dateStr, "seconds");
  let hour = d.hours() === 0 ? "" : d.hours() + ":";
  let minute = d.minutes() >= 10 ? d.minutes() + ":" : "0" + d.minutes() + ":";
  let second = d.seconds() >= 10 ? d.seconds() : "0" + d.seconds();

  return hour + minute + second;
}

export function studyTimeFormat(dateStr: number) {
  var d = moment.duration(dateStr / 1000, "seconds");
  let value = [];
  value.push(Math.floor(d.asDays()));
  value.push(d.hours());
  value.push(d.minutes());
  return value;
}

export function generateUUID(): string {
  let guid = "";
  for (let i = 1; i <= 32; i++) {
    let n = Math.floor(Math.random() * 16.0).toString(16);
    guid += n;
    if (i === 8 || i === 12 || i === 16 || i === 20) guid += "-";
  }
  return guid;
}

export function transformBase64ToBlob(
  base64: string,
  mime: string,
  filename: string
): File {
  const arr = base64.split(",");
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

export function getHost() {
  return window.location.protocol + "//" + window.location.host + "/";
}

export function inStrArray(array: string[], value: string): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
