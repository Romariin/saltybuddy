import { Slide, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const notifications = async(message: string, severity: 'success' | 'info' | 'warning' | 'error' | 'default' ) => {
  severity === 'default' ? toast(message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide
  }) : 
  toast[severity](message, {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Slide
  });
}