import BaseHeader from "./BaseHeader";
import useHeader from "./useHeader";

const BookHeader = () => {
    const headerProps = useHeader([
        {
            name: "all",
            displayName: "전체 도서",
            href: "/book",
            match: /^\/book$|^\/book\?|^\/book\/\d+/g,
        },
        {
            name: "new",
            displayName: "새로 나온 도서",
            href: "/book/new",
            match: /^\/book\/new/g,
        },
        {
            name: "brand",
            displayName: "브랜드별 도서",
            href: "/book/brand",
            match: /^\/book\/brand/g,
        },
        {
            name: "ebook",
            displayName: "eBook",
            href: "/book/ebook",
            match: /^\/book\/ebook/g,
        },
    ]);

    return <BaseHeader {...headerProps} />;
};

export default BookHeader;
