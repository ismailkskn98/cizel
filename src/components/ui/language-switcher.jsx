"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import { Check, Globe } from "lucide-react";

const LANGUAGES = [
    { code: "tr", label: "Türkçe", flag: "🇹🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
];

export default function LanguageSwitcher({ compact = false, className = "" }) {
    const pathname = usePathname();
    const router = useRouter();

    const currentFromPath = useMemo(() => {
        if (!pathname) return "tr";
        const seg = pathname.split("/").filter(Boolean)[0];
        return LANGUAGES.some(l => l.code === seg) ? seg : "tr";
    }, [pathname]);

    const [current, setCurrent] = useState(currentFromPath);

    const currentLang = useMemo(
        () => LANGUAGES.find(l => l.code === current) || LANGUAGES[0],
        [current]
    );

    const handleSelect = (lang) => {
        setCurrent(lang.code);

        // ŞİMDİLİK: sadece UI güncelliyoruz.
        // İLERİDE next-intl ile:
        // const rest = pathname.split("/").filter(Boolean).slice(1).join("/") || "";
        // router.push(`/${lang.code}/${rest}`);
    };

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    className={`relative z-10 !w-fit h-10 rounded-full border-none transition-colors !bg-black/20 border border-black/30 !cursor-pointer ${className}`}
                    aria-label="Dili değiştir"
                >
                    <span className="inline-flex items-center justify-center text-white">
                        <Globe className="h-3 3xl:h-4 w-3 3xl:w-4" aria-hidden="true" />
                    </span>
                    {compact ? (
                        <span className="text-sm tabular-nums text-white">{currentLang.flag}</span>
                    ) : (
                        <span className="inline-flex items-center gap-2 text-white">
                            <span className="text-xs 3xl:text-sm font-medium">{currentLang.label}</span>
                        </span>
                    )}
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                className="w-40 rounded-xl border-muted-foreground/20"
                align="end"
                sideOffset={8}
            >
                <DropdownMenuLabel className="text-xs text-muted-foreground">
                    Dil Seçimi
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                    {LANGUAGES.map((lang) => {
                        const active = lang.code === current;
                        return (
                            <DropdownMenuItem
                                key={lang.code}
                                onClick={() => handleSelect(lang)}
                                className="cursor-pointer text-xs"
                            >
                                <span
                                    className={`flex-1 ${lang.rtl ? "font-medium" : ""}`}
                                    dir={lang.rtl ? "rtl" : "ltr"}
                                >
                                    {lang.label}
                                </span>
                                {active ? (
                                    <Check className="h-4 w-4 opacity-100" />
                                ) : (
                                    <Check className="h-4 w-4 opacity-0" />
                                )}
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuGroup>

                <DropdownMenuSeparator />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
