import Swal from "sweetalert2";

export default function showWarningToast(message) {
  return new Promise((resolve) => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    Toast.fire({
      icon: "warning",
      title: message,
    }).then(() => {
      resolve();
    });
  });
}
