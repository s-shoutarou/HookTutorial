import React, { useState } from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
    //最初に変数と更新関数を配列で定義し、useStateで初期値を決定する。
    //setSerchValue関数を使ってこの値を更新する。

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form>
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text" />
            <input onClick={callSearchFunction} type="submit" value="Search" />
        </form>
    )
}

export default Search;