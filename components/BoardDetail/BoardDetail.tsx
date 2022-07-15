import { BoardDetail as BoardDetailType } from "apis";
import Link from "next/link";
import { formatDate2 } from "utlis/time";
import * as S from "./BoardDetail.style";

const BoardDetail = ({
    title,
    content,
    file,
    view,
    created_at: createdAt,
    previous,
    next,
    page,
    type,
}: BoardDetailType) => {
    return (
        <S.Container>
            <div>
                <h3>{title}</h3>
            </div>
            <S.Info>
                <span>{formatDate2(createdAt)}</span>
                <span>조회수: {view}</span>
            </S.Info>
            <S.Content dangerouslySetInnerHTML={{ __html: content }} />
            {file && (
                <div>
                    첨부파일 <a href={file}>{file}</a>
                </div>
            )}
            {next ? (
                <div>
                    다음 글&nbsp;{next.id}&nbsp;
                    <Link href={`/board/${type.toLowerCase()}/${next.id}`}>
                        {next.title}
                    </Link>
                </div>
            ) : (
                <div>다음 글이 없습니다.</div>
            )}
            {previous ? (
                <div>
                    이전 글&nbsp;{previous.id}&nbsp;
                    <Link href={`/board/${type.toLowerCase()}/${previous.id}`}>
                        {previous.title}
                    </Link>
                </div>
            ) : (
                <div>이전 글이 없습니다.</div>
            )}
            <div>
                <Link href={`/board/${type.toLowerCase()}?page=${page}`}>
                    목록
                </Link>
            </div>
        </S.Container>
    );
};

export default BoardDetail;
