export function debounce<Args extends any[]>(
    func: (...args: Args) => void,
    wait: number,
): (...args: Args) => void {
    let timeout: NodeJS.Timeout | null;

    return function executedFunction(...args: Args) {
        const later = () => {
            timeout = null;
            func(...args);
        };

        if (timeout !== null) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(later, wait);
    };
}
