import SectionHeader from "../../common/sectionHeader"

export default function TurkeyMapHeader() {
    return (
        <SectionHeader
            title="Türkiye Haritası"
            description="Türkiye'nin dört bir yanında gerçekleştirdiğimiz projelerimizi harita üzerinde keşfedin. Kırmızı renkli iller projelerimizin bulunduğu şehirleri göstermektedir."
            className="mb-8 lg:mb-20"
            descriptionClassName={`text-xs sm:text-sm lg:text-lg xl:text-xl text-muted-foreground max-w-3xl mx-auto font-body leading-relaxed line-clamp-3`}
        />
    )
}
