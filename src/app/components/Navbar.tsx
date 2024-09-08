import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

export default function Navbar() {
    const logo = require('../assets/logo.svg');
    return (
        <nav className="lg:container px-2 m-auto flex items-center py-4">
            <div className="logo">
                <Image src={logo} alt="logo" />
            </div>

            <div className="lg:hidden ml-auto">
                <Image width={0} height={0} className="w-[30px] h-[30px]" sizes="100%" src={require('../assets/menu.svg')} alt="" />
            </div>

            <div className="menus ml-auto hidden lg:block">
                <ul className="flex items-center gap-7">
                    <li className="text-[14px] mr-5 active">
                        <Link href={'/'}>
                            Home
                        </Link>
                    </li>

                    <li className="text-[14px] mr-5">
                        <Link href={'/blog'}>
                            Blog
                        </Link>
                    </li>

                    <li className="flex gap-2">
                        <Button
                            href="/login"
                            preset="secondary"
                            text="Login"
                        />

                        <Button
                            href="/request-demo"
                            preset="primary"
                            text="Request Demo"
                        />
                    </li>
                </ul>
            </div>
        </nav>
    )
}