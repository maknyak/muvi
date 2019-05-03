import swal from 'sweetalert2'

export function swall (type, msg = '', callback, confirmation = false) {
  const swallOption = {}
  swallOption.title = (type === 'danger') ? 'Terjadi Kesalahan' : 'Perhatian'
  swallOption.text = msg
  swallOption.type = type

  if (confirmation) {
    swallOption.showCancelButton = true
    swallOption.confirmButtonText = 'Ya'
    swallOption.cancelButtonText = 'Batal'
    swallOption.showCloseButton = true
  }

  swal.fire(swallOption).then(result => {
    if (result.value) {
      if (callback) callback()
    }
  })
}