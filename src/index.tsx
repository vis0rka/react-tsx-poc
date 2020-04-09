import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { unregister as serviceWorkerUnregister } from "./serviceWorker"
;(async () => {
  const config = await (await fetch("/config/env.config.json")).json()
  ReactDOM.render(<App config={config} />, document.getElementById("root"))

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://create-react-app.dev/docs/making-a-progressive-web-app/
  serviceWorkerUnregister()
})()

type AlbumAPIResponse = {
  title: string
  artist?: {
    name: string
    bio?: string
    previousAlbums?: string[]
  }
}

const album: AlbumAPIResponse = { title: "Optional chaining works" }

const artistBio = album?.artist?.bio
console.log(album.title, artistBio)
