import { AuthorList as AuthorListType } from "apis";
import PageButton from "components/PageButton";
import type { PageButtonProps } from "components/PageButton";
import Search from "components/Search";
import type { SearchProps } from "components/Search";
import Author from "./Author";
import * as S from "./AuthorList.style";

export interface AuthorListProps extends PageButtonProps {
    data: AuthorListType[];
    searchProps: SearchProps;
}

const AuthorList = ({
    data,
    searchProps,
    pageButtonFactory,
}: AuthorListProps) => {
    return (
        <S.Container>
            <Search {...searchProps} />
            {data.map((author) => (
                <Author data={author} key={author.id} />
            ))}
            <PageButton pageButtonFactory={pageButtonFactory} />
        </S.Container>
    );
};

export default AuthorList;
