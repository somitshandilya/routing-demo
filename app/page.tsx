"use client"
import {useRouter} from "next/navigation"
import ServerClientComponent from "./components/ServerClientComponent"
import UseGlobalCSS from "./components/UseGlobalCSS"
import DataFetching from "./components/DataFetching"
const Home = () => {
    const router = useRouter()
    return (<>
    <h1>Welcome SOmit</h1>
    <button type="button" onClick={() => router.push("/dashboard")}>Goto Admin Dash</button>
        {/* <ServerClientComponent/> */}
        {/* <UseGlobalCSS /> */}
        <DataFetching/>
    </>
    )
}
export default Home