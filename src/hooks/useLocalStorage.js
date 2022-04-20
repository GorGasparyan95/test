export default function useLocalStorage() {

  const put = (key, value) => localStorage.setItem(key, JSON.stringify(value))

  const get = (key) => {
    return JSON.parse(localStorage.getItem(key))
  }

  const clear = (key) => localStorage.removeItem(key)

  return {
    put,
    get,
    clear
  }

}