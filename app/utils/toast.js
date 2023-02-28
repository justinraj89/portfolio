import { toast } from "react-toastify";

export const showToast = (type, message) => {
  switch (type) {
    case "SUCCESS":
      toast(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark'
      });
      break;
    case "ERROR":
      toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: 'dark'
      });
      break;
    default:
      return false;
  }
};