import { AuthorList as AuthorListType } from "apis";
import PageButton from "components/PageButton";
import Search from "components/Search";
import { SearchPaginationProps } from "hooks/useSearchPagination";
import Author from "./Author";
import * as S from "./AuthorList.style";

const AuthorList = ({
    data,
    searchProps,
    pageButtonProps,
}: SearchPaginationProps<AuthorListType>) => {
    return (
        <S.Container>
            <Search {...searchProps} />
            <S.Grid>
                {data.map((author) => (
                    <Author data={author} key={author.id} />
                ))}
            </S.Grid>
            <PageButton {...pageButtonProps} />
        </S.Container>
    );
};

export default AuthorList;
