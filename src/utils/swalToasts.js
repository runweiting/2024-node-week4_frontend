import Swal from "sweetalert2";

function showToast(icon, message) {
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
      icon,
      title: message,
    }).then(() => {
      resolve();
    });
  });
}

function errorToast(message) {
  showToast("error", message);
}

function warningToast(message) {
  showToast("warning", message);
}

function successToast(message) {
  showToast("success", message);
}

export { errorToast, warningToast, successToast };
