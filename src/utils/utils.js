import { toast, Zoom } from 'react-toastify';

export function setItemToLocalStorage(key, item) {
    try {
        localStorage.setItem(key, item);
        return true;
    } catch {
        return false;
    }
}

export const toastSuccess = message => {
    toast.success(message, {
        closeButton: false,
        transition: Zoom,
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
    });
};

export const toastError = message => {
    toast.error(message, {
        closeButton: false,
        transition: Zoom,
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
    });
}