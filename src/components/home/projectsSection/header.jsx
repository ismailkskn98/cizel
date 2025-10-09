import SectionHeader from "../../common/sectionHeader"

export default function Header({ homeData }) {
    return (
        <SectionHeader
            title={homeData.title}
            description={homeData.subtitle}
        />
    )
}
