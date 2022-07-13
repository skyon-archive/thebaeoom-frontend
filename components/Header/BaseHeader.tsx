import Link from "next/link";
import * as S from "./BaseHeader.style";
import { HeaderRoute } from "./useHeader";

export interface BaseHeaderProps {
    title: string;
    routes: HeaderRoute[];
}

const BaseHeader = ({ title, routes }: BaseHeaderProps) => {
    return (
        <S.Container>
            <S.Title>
                <h1>{title}</h1>
            </S.Title>
            {routes.length > 1 && (
                <S.Menu>
                    {routes.map((route) => (
                        <Link href={route.href} key={route.name} passHref>
                            <S.MenuItem active={route.isActive}>
                                {route.displayName}
                            </S.MenuItem>
                        </Link>
                    ))}
                </S.Menu>
            )}
        </S.Container>
    );
};

export default BaseHeader;
