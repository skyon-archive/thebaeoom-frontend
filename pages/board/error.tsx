import { BoardHeader } from "components/Header";
import dynamic from "next/dynamic";

const ErrorForm = dynamic(
    () => import("components/Form").then((c) => c.ErrorForm),
    { ssr: false },
);

const BoardFilePage = () => {
    return (
        <>
            <BoardHeader />
            <ErrorForm />
        </>
    );
};

export default BoardFilePage;
