import BaseHeader from "./BaseHeader";
import useHeader from "./useHeader";

const ContactHeader = () => {
    const headerProps = useHeader([
        {
            name: "contact",
            displayName: "출간 문의",
            href: "/contact",
            match: /^\/contact/g,
        },
    ]);

    return <BaseHeader {...headerProps} />;
};

export default ContactHeader;
