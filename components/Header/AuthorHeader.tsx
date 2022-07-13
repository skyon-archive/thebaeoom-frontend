import BaseHeader from "./BaseHeader";
import useHeader from "./useHeader";

const AuthorHeader = () => {
    const headerProps = useHeader([
        {
            name: "author",
            displayName: "저자",
            href: "/author",
            match: /^\/author/g,
        },
    ]);

    return <BaseHeader {...headerProps} />;
};

export default AuthorHeader;
