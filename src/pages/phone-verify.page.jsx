import { Btn, Desc, DigitInputWrapper, Err, Form, Page, Title, Wrapper } from "../components/widgets"
import { createRef, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import VerifyInputComponent from "../components/verify-input.component";
import LoaderComponent from "../components/loader.component";

const PhoneVerify = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const history = useHistory()

    const inputRefs = useMemo(() => Array(6).fill(0).map(i => createRef()), [])
    

    const changeInput = (value, item) => {
        // *** when user input one digit after input user i focus on next input digit
        if (value !== '') {
            if (item !== 5) inputRefs[item + 1].current.focus()
        }
    }

    const handleBackspace = (e, item) => {
        if (e.keyCode === 8) {
            // *** if user backspace in one digit input we clear input
            if (inputRefs[item].current.value && +inputRefs[item].current.value / 10 < 1) {
                inputRefs[item].current.value = ''
                return
            }
            // *** if user backspace in empty input i focus on before item
            if (item !== 0) inputRefs[item - 1].current.focus()
        }

        // *** left key
        if(e.keyCode === 37) {
            if (item !== 0) inputRefs[item - 1].current.select()
        }
        
        // *** right key
        if(e.keyCode === 39) {
            if (item !== 5) inputRefs[item + 1].current.select()
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (inputRefs[0].current.value === '' ||
            inputRefs[1].current.value === '' ||
            inputRefs[2].current.value === '' ||
            inputRefs[3].current.value === '' ||
            inputRefs[4].current.value === '' ||
            inputRefs[5].current.value === '') {
            setError(true)
            return
        }


        setError(false)
        setLoading(true)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                code: `${inputRefs[0]}${inputRefs[1]}${inputRefs[2]}${inputRefs[3]}${inputRefs[4]}${inputRefs[5]}`
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        // ** maybe we need it later
        const resJson = response.json()
        console.log(resJson)

        setLoading(false)
        history.push('/finish')

    }

    return (
        <Page>
            <Wrapper>
                <Title>???? ?????????? ???? ???????? ????????</Title>
                <Form onSubmit={handleSubmit}>
                    <DigitInputWrapper>


                        <VerifyInputComponent autoFocus inputRef={inputRefs[0]} val={0} changeInput={changeInput} handleBackspace={handleBackspace} />
                        <VerifyInputComponent inputRef={inputRefs[1]} val={1} changeInput={changeInput} handleBackspace={handleBackspace} />
                        <VerifyInputComponent inputRef={inputRefs[2]} val={2} changeInput={changeInput} handleBackspace={handleBackspace} />
                        <VerifyInputComponent inputRef={inputRefs[3]} val={3} changeInput={changeInput} handleBackspace={handleBackspace} />
                        <VerifyInputComponent inputRef={inputRefs[4]} val={4} changeInput={changeInput} handleBackspace={handleBackspace} />
                        <VerifyInputComponent inputRef={inputRefs[5]} val={5} changeInput={changeInput} handleBackspace={handleBackspace} />



                    </DigitInputWrapper>
                    {error && <Err>???? ?????????? ???????? 6 ???????? ??????</Err>}
                    <Btn>??????????</Btn>
                </Form>
                <Desc onClick={() => history.goBack()} center>(?????????? ?????????? ???? ?????????????? ???? ????????)</Desc>
            </Wrapper>

            {loading && <LoaderComponent />}
        </Page>
    )
}

export default PhoneVerify
