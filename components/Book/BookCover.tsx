import { BookPreview } from "apis";
import Image from "next/image";
import Link from "next/link";

const BookCover = ({
    isbn,
    cover,
    scale = 1.2,
}: BookPreview & { scale?: number }) => {
    return (
        <Link href={`/book/${isbn}`} passHref>
            <a>
                <Image
                    src={cover}
                    width={100 * scale}
                    height={140 * scale}
                    layout="fixed"
                    objectFit="cover"
                    alt={isbn}
                />
            </a>
        </Link>
    );
};

export default BookCover;
