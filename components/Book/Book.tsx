import { BookList } from "apis";
import Image from "next/image";
import Link from "next/link";
import { formatTime } from "utlis/time";
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
                />
                <S.Content>
                    <div>
                        <h4>{data.title}</h4>
                    </div>
                    <div>
                        <p>{data.author.map((author) => author.name)}</p>
                        <p>{data.publisher}</p>
                        <p>{formatTime(data.pubDate)}</p>
                        <p>{data.price.toLocaleString("ko-KR")}원</p>
                    </div>
                </S.Content>
            </S.Container>
        </Link>
    );
};

export default Book;
