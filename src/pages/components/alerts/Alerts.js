import Swal from "sweetalert2"

export const handleErrorAlert = (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
      background: '#2C3333',
      color: '#EEEEEE',
    })
    return;
  }

export const handleSuccessAlert = (message) => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: message,
        showConfirmButton: true,
        timer: 2000,
        background: '#2C3333',
        color: '#EEEEEE',
    })
    return;
}

export const deleteMessage = (action, title) => {
  Swal.fire({
    title: title,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      action();
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}