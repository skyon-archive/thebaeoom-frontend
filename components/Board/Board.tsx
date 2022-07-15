import { BoardList } from "apis";
import PageButton from "components/PageButton";
import Search from "components/Search";
import { SearchPaginationProps } from "hooks/useSearchPagination";
import Link from "next/link";
import { formatDate2 } from "utlis/time";
import * as S from "./Board.style";

const Board = ({
    data,
    searchProps,
    pageButtonProps,
}: SearchPaginationProps<BoardList>) => {
    return (
        <S.Container>
            <Search {...searchProps} />
            <S.Table>
                <tbody>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>날짜</th>
                        <th>조회수</th>
                    </tr>
                    {data.map((board) => (
                        <tr key={board.id}>
                            <td>{board.id}</td>
                            <td>
                                <Link
                                    key={board.id}
                                    href={`/board/${board.type.toLowerCase()}/${
                                        board.id
                                    }`}
                                >
                                    {board.title}
                                </Link>
                            </td>
                            <td>{formatDate2(board.created_at)}</td>
                            <td>{board.view}</td>
                        </tr>
                    ))}
                </tbody>
            </S.Table>
            <PageButton {...pageButtonProps} />
        </S.Container>
    );
};

export default Board;
