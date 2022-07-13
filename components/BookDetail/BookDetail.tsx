import { BookDetail as BookDetailType } from "apis";
import Image from "next/image";
import { formatTime } from "utlis/time";
import * as S from "./BookDetail.style";

interface BookDetailProps {
    data: BookDetailType;
}

const BookDetail = ({ data }: BookDetailProps) => {
    return (
        <S.Container>
            <div style={{ flexShrink: 0 }}>
                <Image
                    src={data.cover}
                    alt={data.title}
                    width={200}
                    height={280}
                    layout="fixed"
                    objectFit="cover"
                />
            </div>
            <S.Content>
                <h3>{data.title}</h3>
                <S.Table>
                    <tbody>
                        <tr>
                            <th>저자</th>
                            <td>{data.author.map((author) => author.name)}</td>
                            <th>ISBN</th>
                            <td>{data.isbn}</td>
                        </tr>
                        <tr>
                            <th>출판사</th>
                            <td>{data.publisher}</td>
                            <th>페이지</th>
                            <td>{data.page}쪽</td>
                        </tr>
                        <tr>
                            <th>발행일</th>
                            <td>{formatTime(data.pubDate)}</td>
                            <th>크기</th>
                            <td>{data.size}</td>
                        </tr>
                        <tr>
                            <th>정가</th>
                            <td>{data.price.toLocaleString("ko-KR")}원</td>
                            <th>분야</th>
                            <td>{data.category}</td>
                        </tr>
                    </tbody>
                </S.Table>
            </S.Content>
        </S.Container>
    );
};

export default BookDetail;
