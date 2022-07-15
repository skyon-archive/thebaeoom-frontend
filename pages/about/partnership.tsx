import { PartnershipForm } from "components/Form";
import { AboutHeader } from "components/Header";
import dynamic from "next/dynamic";

const ErrorForm = dynamic(
    () => import("components/Form").then((c) => c.ErrorForm),
    { ssr: false },
);

const BoardFilePage = () => {
    return (
        <>
            <AboutHeader />
            <PartnershipForm />
        </>
    );
};

export default BoardFilePage;
