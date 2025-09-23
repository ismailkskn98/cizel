import CustomButton from "@/components/common/customButton"
import Image from "next/image"

export default function About() {
    return (
        <section className="space-y-8">
            <article className="space-y-6">
                <div className="flex items-end gap-2">
                    <Image src="/images/cizel-logo/cizel-logo-material-left.webp" alt="Cizel Logo material" width={32} height={32} className="w-fit h-8 3xl:h-9 object-contain grayscale-100" />
                    <span className="inline-block text-sm 3xl:text-base font-medium text-black/80">Cizel Hakkında</span>
                </div>
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black/90 leading-tight">
                    We create things that matter
                </h2>
                <p className="text-lg text-black/70 leading-relaxed font-body max-w-lg">
                    ____Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam consequat
                    sunt nostrud amet.
                </p>
                <CustomButton label="More About" href="#" fillcolor="fill-black" bgcolor="bg-black" iconcolor="text-white" textcolor="text-black" bordercolor="border-black/50" />
            </article>
        </section>
    )
}
