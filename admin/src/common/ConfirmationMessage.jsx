import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

export const showSwalConfirmationAlert = (SuccessDeleteFunction) => {
  MySwal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: "#00ff00",
    confirmButtonText: "Yes",
    cancelButtonColor: "#ff0000",
    cancelButtonText: "Cancel",
  }).then((result) => {
    if (result.isConfirmed) {
      // DeleteConfirmedMessage();
      if (typeof SuccessDeleteFunction === "function") {
        SuccessDeleteFunction();
      }
    } else {
      MySwal.close();
    }
  });
};

const DeleteConfirmedMessage = () => {
  MySwal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    className: "btn btn-success",
    confirmButtonText: "OK",
    customClass: {
      confirmButton: "btn btn-success",
    },
  });
};
