import * as S from "./BookListTab.style";

export interface BookListTabProps {
    tab: {
        text: string;
        buttonProps: { onClick: () => void };
        isActive: boolean;
    }[];
}

const BookListTab = ({ tab }: BookListTabProps) => {
    return (
        <S.Container>
            {tab.map(({ buttonProps, isActive, text }) => (
                <S.Tab key={text} {...buttonProps} active={isActive}>
                    {text}
                </S.Tab>
            ))}
        </S.Container>
    );
};

export default BookListTab;
