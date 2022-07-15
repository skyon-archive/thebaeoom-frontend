import * as S from "./BookListTab.style";

export interface BookListTabProps {
    tabFactory: {
        text: string;
        buttonProps: { onClick: () => void };
        isActive: boolean;
    }[];
}

const BookListTab = ({ tabFactory }: BookListTabProps) => {
    return (
        <S.Container>
            {tabFactory.map(({ buttonProps, isActive, text }) => (
                <S.Tab key={text} {...buttonProps} active={isActive}>
                    {text}
                </S.Tab>
            ))}
        </S.Container>
    );
};

export default BookListTab;
