import BaseHeader from "./BaseHeader";
import useHeader from "./useHeader";

const AboutHeader = () => {
    const headerProps = useHeader([
        {
            name: "company",
            displayName: "회사 소개",
            href: "/about/company",
            match: /^\/about\/company/g,
        },
        {
            name: "brand",
            displayName: "브랜드",
            href: "/about/brand",
            match: /^\/about\/brand/g,
        },
        {
            name: "map",
            displayName: "찾아오시는 길",
            href: "/about/map",
            match: /^\/about\/map/g,
        },
        {
            name: "partnership",
            displayName: "제휴 문의",
            href: "/about/partnership",
            match: /^\/about\/partnership/g,
        },
    ]);

    return <BaseHeader {...headerProps} />;
};

export default AboutHeader;
