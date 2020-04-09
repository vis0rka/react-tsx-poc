import FramedLayout from "layouts/Framed"
import toastr from "plugins/toastify"
import React, { useEffect } from "react"

const Toastr = () => {
  useEffect(() => {
    ;(async () => {
      toastr.success("This is a realy realy long success message.")
      toastr.error("The error message")
      // setTimeout(() => {
      //   toastr.clear()
      // }, 2000)
    })()
  }, [])

  return (
    <FramedLayout title="Toaster poc">
      <div>Toaster poc</div>
    </FramedLayout>
  )
}

export default Toastr
