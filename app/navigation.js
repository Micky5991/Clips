import env from "@/libs/env.js";
import Link from "next/link.js";

export default function Navigation() {
    return (
        <div className={"flex flex-row justify-between items-center py-5"}>
            <div>
                <Link href={"/"} className={"font-bold text-xl"}>
                    {env("NEXT_PUBLIC_PAGE_NAME")}
                </Link>
            </div>
            <div>
                Login
            </div>
        </div>
    );
}
