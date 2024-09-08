import Link from "next/link"

interface IButton {
    text: string
    href: string
    size?: 'sm' | 'lg' | 'xl'
    preset: 'primary' | 'secondary'
}

export default function Button({ href, preset, text, size = 'sm' }: IButton) {
    return (<Link href={href}>
        <button className={`shadow-lg shadow-[#5d927c63] btn-${preset} btn-${size}`}>
            {text}
        </button>
    </Link>)
}