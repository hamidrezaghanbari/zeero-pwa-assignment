import { Loader } from "./widgets"

const LoaderComponent = () => {
    return (
        <Loader>
            <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <b>لطفا منتظر بمانید</b>
        </Loader>
    )
}

export default LoaderComponent
