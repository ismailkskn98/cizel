'use client'

import SectionHeader from "../../common/sectionHeader"
import { useTranslations } from "next-intl"

export default function Header() {
    const t = useTranslations('AboutPage')

    return (
        <SectionHeader
            title={t('title')}
            description={t('homeDescription')}
        />
    )
}