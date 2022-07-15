import * as S from "components/Search/Search.style";
import React from "react";

export interface SearchProps {
    formProps: { onSubmit: (e: React.FormEvent) => void };
    inputProps: {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        value: string;
    };
    searchButtonProps: {
        onClick: () => void;
    };
}

const Search = ({ formProps, inputProps, searchButtonProps }: SearchProps) => {
    return (
        <S.Container {...formProps}>
            <S.Input {...inputProps} />
            <button type="submit" {...searchButtonProps}>
                검색
            </button>
        </S.Container>
    );
};

export default Search;
