export const parseUrl = (url, ori) => {
  const decode = decodeURIComponent(url)
  if (ori) {
    const encode = encodeURIComponent(ori)
    return { decode, encode }
  } else {
    const encode = encodeURIComponent(decode)
    return { decode, encode }
  }
}
