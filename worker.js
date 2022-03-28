const colorPicker = "Usta_Kozim";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/script.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil (
    caches.open(colorPicker).then(cache => {
      caches.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWidth(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.event);
    })
  )
})