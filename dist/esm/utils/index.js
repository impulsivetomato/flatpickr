export const pad = (number, length = 2) => `000${number}`.slice(length * -1);
export const int = (bool) => (bool === true ? 1 : 0);
export function debounce(func, wait, immediate = false) {
    let timeout;
    return function () {
        let context = this, args = arguments;
        timeout !== null && clearTimeout(timeout);
        timeout = window.setTimeout(function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        }, wait);
        if (immediate && !timeout)
            func.apply(context, args);
    };
}
export const arrayify = (obj) => obj instanceof Array ? obj : [obj];
