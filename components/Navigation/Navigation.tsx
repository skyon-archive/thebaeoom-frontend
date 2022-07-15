import { useRouter } from "next/router";
import * as S from "./Navigation.style";
import NavigationButton from "./NavigationButton";

export interface NavigationRoute {
    name: string;
    displayName: string;
    href: string;
    match: RegExp;
    isActive: boolean;
}

const Navigation = () => {
    const router = useRouter();

    const routes: Omit<NavigationRoute, "isActive">[] = [
        {
            name: "about",
            displayName: "회사 소개",
            href: "/about",
            match: /^\/about/g,
        },
        { name: "book", displayName: "도서", href: "/book", match: /^\/book/g },
        {
            name: "author",
            displayName: "저자",
            href: "/author",
            match: /^\/author/g,
        },
        {
            name: "board",
            displayName: "커뮤니티",
            href: "/board",
            match: /^\/board/g,
        },
        {
            name: "contact.tsx",
            displayName: "출간 문의",
            href: "/contact",
            match: /^\/contact/g,
        },
    ];

    const newRoutes: NavigationRoute[] = routes.map((route) => ({
        ...route,
        isActive: new RegExp(route.match).test(router.asPath),
    }));

    return (
        <S.Container>
            <div>
                <NavigationButton href="/" active>
                    더배움
                </NavigationButton>
            </div>
            <div>
                {newRoutes.map((route) => (
                    <NavigationButton
                        key={route.name}
                        href={route.href}
                        active={route.isActive}
                    >
                        {route.displayName}
                    </NavigationButton>
                ))}
            </div>
            <div>
                <NavigationButton href="/book">검색</NavigationButton>
            </div>
        </S.Container>
    );
};

export default Navigation;
