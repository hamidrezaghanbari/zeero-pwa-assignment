import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import LoaderComponent from "../components/loader.component";
import { Btn, Desc, Page, InputWrapper, Form, Wrapper, Title, Err } from "../components/widgets"

const LoginPage = () => {
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm()
    const history = useHistory()

    const onSubmit = async inputData => {

        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(inputData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })

        // ** maybe we need it later
        const resJson = response.json()

        setLoading(false)
        history.push('/verify')
    
    }


    return (
        <Page>
            <Wrapper>
                <Title>شماره موبایل خود را وارد کنید</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputWrapper>
                        <input maxLength="11" type="text" placeholder="09XXXXXXXXX"
                            {...register("phone", { required: true, maxLength: 11, minLength: 11, pattern: /09\d{9}/ })} />

                        {errors.phone && errors.phone.type === "required" && <Err>فیلد تلفن همراه الزامی است</Err>}
                        {errors.phone && errors.phone.type === "minLength" && <Err>تلفن همراه 11 رقمی است</Err>}
                        {errors.phone && errors.phone.type === "pattern" && <Err>فرمت ایمیل اشتباه است</Err>}

                    </InputWrapper>
                    <Btn>درخواست کد</Btn>
                </Form>
                <Desc>پس از وارد کردن شماره موبایل و لمس دکمه درخواست کد پیامکی حاوی یک کد 6رقمی برای شما ارسال می شود با وارد کردن کد میتوانید وارد حسااب کاربری خود شوید</Desc>
            </Wrapper>

            {loading && <LoaderComponent />}
        </Page>
    )
}

export default LoginPage
