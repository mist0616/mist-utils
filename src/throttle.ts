export function throttle<Args extends any[]>(
    func: (...args: Args) => void,
    limit: number,
): (...args: Args) => void {
    let lastFunc: ReturnType<typeof setTimeout>;
    let lastRan: number;

    return function (...args: Args) {
        if (!lastRan) {
            func(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if (Date.now() - lastRan >= limit) {
                    func(...args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}
