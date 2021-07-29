
const VerifyInputComponent = ({ autoFocus, inputRef, changeInput, handleBackspace , val}) => {

    if (autoFocus) return <input maxLength={1} size={1} type="tel" autoFocus
        min="0" max="9" 
        ref={inputRef} onChange={(e) => changeInput(e.target.value, val)} onKeyDown={(e) => handleBackspace(e, val)}
    />


    return <input maxLength={1} size={1} type="tel"
        min="0" max="9"
        ref={inputRef} onChange={(e) => changeInput(e.target.value, val)} onKeyDown={(e) => handleBackspace(e, val)}
    />
}

export default VerifyInputComponent
