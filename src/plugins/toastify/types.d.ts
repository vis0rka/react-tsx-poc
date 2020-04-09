declare type ToastifyOptions = {
  text: string
  duration: number
  newWindow: boolean
  close: boolean
  gravity: "top" | "bottom"
  position: "left" | "center" | "right"
  backgroundColor: string
  stopOnFocus: boolean // Prevents dismissing of toast on hover
}

type ToastifyObject = {
  showToast: () => ToastifyObject
  hideToast: () => void
}

declare module "toastify-js" {
  function Toastify(options: ToastifyOptions): ToastifyObject
  export = Toastify
}
