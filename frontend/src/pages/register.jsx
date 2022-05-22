import Link from "next/link"
import Template from "../template/Default"

export default function Map() {
    return (
        <Template>
            <h1>MAP</h1>
            <Link href="/">
                <button>Go to map</button>
            </Link>
        </Template>
    )
}