import BaseHeader from "./BaseHeader";
import useHeader from "./useHeader";

const BoardHeader = () => {
    const headerProps = useHeader([
        {
            name: "notice",
            displayName: "공지사항",
            href: "/board/notice",
            match: /^\/board\/notice/g,
        },
        {
            name: "file",
            displayName: "자료실",
            href: "/board/file",
            match: /^\/board\/file/g,
        },
        {
            name: "error",
            displayName: "오류 제보",
            href: "/board/error",
            match: /^\/board\/error/g,
        },
    ]);

    return <BaseHeader {...headerProps} />;
};

export default BoardHeader;
