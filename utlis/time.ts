export function formatTime(time: string) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}년 ${month}월`;
}
