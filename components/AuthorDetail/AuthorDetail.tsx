import type { AuthorDetail as AuthorDetailType } from "apis";
import BookCover from "components/Book/BookCover";
import ArticleLayout from "components/Layout/ArticleLayout";
import Image from "next/image";
import blog from "public/social/blog.png";
import cafe from "public/social/cafe.png";
import instagram from "public/social/instagram.png";
import youtube from "public/social/youtube.png";
import { SocialLink } from "./AuthorDetail.style";
import * as S from "./AuthorDetail.style";

const AuthorDetail = ({
    name,
    description,
    book,
    youtube_link: youtubeLink,
    blog_link: blogLink,
    sns_link: snsLink,
    cafe_link: cafeLink,
}: AuthorDetailType) => {
    return (
        <S.Container>
            <div>
                저자: {name}
                <ArticleLayout
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
            <S.Grid>
                {book.map((item) => (
                    <BookCover key={item.isbn} {...item} />
                ))}
            </S.Grid>
            <S.SocialLink>
                {youtubeLink && (
                    <a href={youtubeLink} target="_blank" rel="noreferrer">
                        <Image
                            src={youtube}
                            layout="fixed"
                            width={70}
                            height={60}
                            objectFit="contain"
                        />
                    </a>
                )}
                {blogLink && (
                    <a href={blogLink} target="_blank" rel="noreferrer">
                        <Image
                            src={blog}
                            layout="fixed"
                            width={70}
                            height={60}
                            objectFit="contain"
                        />
                    </a>
                )}
                {snsLink && (
                    <a href={snsLink} target="_blank" rel="noreferrer">
                        <Image
                            src={instagram}
                            layout="fixed"
                            width={70}
                            height={60}
                            objectFit="contain"
                        />
                    </a>
                )}
                {cafeLink && (
                    <a href={cafeLink} target="_blank" rel="noreferrer">
                        <Image
                            src={cafe}
                            layout="fixed"
                            width={70}
                            height={60}
                            objectFit="contain"
                        />
                    </a>
                )}
            </S.SocialLink>
        </S.Container>
    );
};

export default AuthorDetail;
