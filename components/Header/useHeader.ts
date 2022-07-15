import { BaseHeaderProps } from "components/Header/BaseHeader";
import { NavigationRoute } from "components/Navigation/Navigation";
import { useRouter } from "next/router";

interface UseHeader {
    (routes: Omit<NavigationRoute, "isActive">[]): BaseHeaderProps;
}

const useHeader: UseHeader = (routes) => {
    const router = useRouter();

    return {
        title:
            routes.find((route) => new RegExp(route.match).test(router.asPath))
                ?.displayName ?? routes[0].displayName,
        routes: routes.map((route) => ({
            ...route,
            isActive: new RegExp(route.match).test(router.asPath),
        })),
    };
};

export default useHeader;
