export function formatDate1(time: string) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}년 ${month}월`;
}

export function formatDate2(time: string) {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}.${month}.${day}`;
}
