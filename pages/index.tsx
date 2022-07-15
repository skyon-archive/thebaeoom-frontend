import { BookList, BooksApi } from "apis";
import { Banner, BannersApi } from "apis/banners";
import BookShelf from "components/Book/BookShelf";
import SliderLayout from "components/Layout/SliderLayout";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

interface MainPageProps {
    banner: Banner[];
    book: BookList[];
}

const MainPage: NextPage<MainPageProps> = ({ banner, book }) => {
    return (
        <>
            <SliderLayout>
                <Slider
                    centerMode
                    slidesToShow={1}
                    variableWidth
                    autoplay
                    dots={banner.length > 1}
                    adaptiveHeight
                    infinite
                >
                    {banner.map((item) => (
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            key={item.id}
                        >
                            <Image
                                src={item.image}
                                width={1024}
                                height={320}
                                objectFit="cover"
                                layout="fixed"
                                priority
                                alt={item.title}
                            />
                        </a>
                    ))}
                    {banner.length === 1 &&
                        banner.map((item) => (
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                key={item.id}
                            >
                                <Image
                                    src={item.image}
                                    width={1024}
                                    height={320}
                                    objectFit="cover"
                                    layout="fixed"
                                    priority
                                    alt={item.title}
                                />
                            </a>
                        ))}
                </Slider>
            </SliderLayout>
            <BookShelf data={book} />
            <Head>
                <title>더배움</title>
            </Head>
        </>
    );
};

export const getStaticProps: GetStaticProps<MainPageProps> = async () => {
    const { data: banner } = await BannersApi.list({});
    const {
        data: { results: book },
    } = await BooksApi.list({ limit: 4 });
    return {
        props: { banner, book },
        revalidate: 10,
    };
};

export default MainPage;
