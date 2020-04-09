import colors from "theme/colors"
import Toastify from "toastify-js"

const toastifies = [] as ToastifyObject[]

const options = {
  duration: 5000,
  newWindow: true,
  gravity: "top",
  position: "right",
  stopOnFocus: true,
} as ToastifyOptions

export default {
  success: (text: string) => {
    toastifies.push(
      Toastify({
        ...options,
        text,
        close: false,
        backgroundColor: colors.green,
      }).showToast(),
    )
  },

  error: (text: string) => {
    toastifies.push(
      Toastify({
        ...options,
        text,
        close: true,
        duration: -1,
        backgroundColor: colors.red,
      }).showToast(),
    )
  },

  clear: () => {
    while (toastifies.length > 0) {
      /* eslint-disable no-unused-expressions */
      toastifies.pop()?.hideToast()
    }
  },
}
