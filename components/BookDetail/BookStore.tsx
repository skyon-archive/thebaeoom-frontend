import { BookstoreLink } from "apis";
import Image, { StaticImageData } from "next/image";
import aladin from "public/bookstore/aladin.svg";
import kyobo from "public/bookstore/kyobo.svg";
import naver from "public/bookstore/naver.svg";
import yes24 from "public/bookstore/yes24.svg";
import * as S from "./BookStore.style";

interface BookStoreProps {
    link: BookstoreLink[];
}

const getImgSrc = (
    type: Exclude<BookstoreLink["image"], "NIL">,
): StaticImageData => {
    switch (type) {
        case "YES":
            return yes24;
        case "KYO":
            return kyobo;
        case "ALA":
            return aladin;
        case "NAV":
            return naver;
        default:
            return null;
    }
};

const BookStore = ({ link }: BookStoreProps) => {
    return (
        <S.Container>
            <S.Header>도서 구매</S.Header>
            {link.map((item) => (
                <a
                    key={item.link}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {item.image === "NIL" ? (
                        item.text
                    ) : (
                        <Image
                            src={getImgSrc(item.image)}
                            alt={item.text}
                            layout="fixed"
                            width={100}
                            height={50}
                            objectFit="scale-down"
                        />
                    )}
                </a>
            ))}
        </S.Container>
    );
};

export default BookStore;
