import Link from "next/link"
import Template from "../template/Default"

export default function Map() {
    return (
        <Template>
            <h1>MAP</h1>
            <Link href="/register">
                <button>Register New Location</button>
            </Link>
        </Template>
    )
}