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
        <>
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
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "80px", fontWeight: "bold" }}>
                            첨부파일
                        </div>
                        <a
                            href={file}
                            target="_blank"
                            download
                            rel="noreferrer"
                        >
                            {file.split("/").at(-1)}
                        </a>
                    </div>
                )}
                {next ? (
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "80px", fontWeight: "bold" }}>
                            다음 글
                        </div>
                        <Link href={`/board/${type.toLowerCase()}/${next.id}`}>
                            <a
                                href={`/board/${type.toLowerCase()}/${next.id}`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                {next.title}
                            </a>
                        </Link>
                    </div>
                ) : (
                    <div style={{ color: "#777" }}>다음 글이 없습니다.</div>
                )}
                {previous ? (
                    <div style={{ display: "flex" }}>
                        <div style={{ width: "80px", fontWeight: "bold" }}>
                            이전 글
                        </div>
                        <Link
                            href={`/board/${type.toLowerCase()}/${previous.id}`}
                        >
                            <a
                                href={`/board/${type.toLowerCase()}/${
                                    previous.id
                                }`}
                                style={{
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                {previous.title}
                            </a>
                        </Link>
                    </div>
                ) : (
                    <div style={{ color: "#777" }}>이전 글이 없습니다.</div>
                )}
            </S.Container>
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width: 768,
                    margin: "16px auto",
                }}
            >
                <Link
                    href={`/board/${type.toLowerCase()}?page=${page}`}
                    passHref
                >
                    <a
                        href={`/board/${type.toLowerCase()}?page=${page}`}
                        style={{
                            border: "1px solid #eee",
                            padding: "8px 12px",
                            textDecoration: "none",
                            color: "black",
                        }}
                    >
                        목록
                    </a>
                </Link>
            </div>
        </>
    );
};

export default BoardDetail;
