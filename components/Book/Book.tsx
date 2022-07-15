import { BookList } from "apis";
import Image from "next/image";
import Link from "next/link";
import { formatDate1 } from "utlis/time";
import * as S from "./Book.style";

interface BookProps {
    data: BookList;
    type: string;
}

const Book = ({ data, type }: BookProps) => {
    return (
        <Link href={`/book${type}/${data.isbn}`} passHref>
            <S.Container>
                <Image
                    src={data.cover}
                    width={100 * 1.2}
                    height={140 * 1.2}
                    objectFit="cover"
                    layout="fixed"
                    alt={data.title}
                />
                <S.Content>
                    <div>
                        <h4>{data.title}</h4>
                    </div>

                    <S.Table>
                        <tbody>
                            <tr>
                                <th>저자</th>
                                <td>
                                    {data.author.map((author) => author.name)}
                                </td>
                            </tr>
                            <tr>
                                <th>출판사</th>
                                <td>{data.publisher}</td>
                            </tr>
                            <tr>
                                <th>발행일</th>
                                <td>{formatDate1(data.pubDate)}</td>
                            </tr>
                            <tr>
                                <th>정가</th>
                                <td>{data.price.toLocaleString("ko-KR")}원</td>
                            </tr>
                        </tbody>
                    </S.Table>
                </S.Content>
            </S.Container>
        </Link>
    );
};

export default Book;
