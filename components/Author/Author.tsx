import { AuthorList } from "apis";
import Link from "next/link";
import * as S from "./Author.style";

interface AuthorProps {
    data: AuthorList;
}

const Author = ({ data }: AuthorProps) => {
    return (
        <Link href={`/author/${data.id}`} passHref>
            <S.Container>{data.name}</S.Container>
        </Link>
    );
};

export default Author;
