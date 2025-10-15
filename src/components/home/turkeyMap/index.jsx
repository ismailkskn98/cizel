"use client";
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import TurkeyMapHeader from "./header";
import { useRouter } from "@/i18n/navigation";

const geoUrl = "/geo/turkiye-iller.json";

export default function TurkeyMap({ hasProjects = [], homeData }) {
    const router = useRouter();

    const goProjects = (provinceName) => {
        const hasProject = hasProjects.some(item => item.toLowerCase() == provinceName.toLowerCase());
        if (hasProject) {
            router.push(`/projects/${provinceName.toLowerCase()}`);
        }
    };

    return (
        <section className="w-full relative">
            <TurkeyMapHeader homeData={homeData} />
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 2000, center: [35, 39] }}
                className="relative w-full h-fit -mt-12 md:-mt-36 lg:-mt-60 xl:-mt-72"
            >
                <Geographies geography={geoUrl}>
                    {({ geographies }) =>
                        geographies.map((geo) => {
                            const name = geo.properties?.name || geo.properties?.NAME_1 || geo.id;
                            const isProjectCity = hasProjects.some(item => item.toLowerCase() == name.toLowerCase());

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    fill="#FF5533"
                                    stroke="#000000"
                                    data-tooltip-id="map-tooltip"
                                    data-tooltip-content={name}
                                    onClick={() => goProjects(String(name))}
                                    style={{
                                        default: {
                                            fill: isProjectCity ? "#962332" : "#d5d2d2",
                                            stroke: isProjectCity ? "#6e1a25" : "#bab3b3",
                                            strokeWidth: 0.75,
                                            outline: "none",
                                            cursor: "pointer",
                                            transition:
                                                "fill 220ms ease, stroke 220ms ease, stroke-width 220ms ease, filter 220ms ease",
                                            vectorEffect: "non-scaling-stroke",
                                        },
                                        hover: {
                                            fill: "#ba2c3e",
                                            stroke: "#6e1a25",
                                            strokeWidth: 0.75,
                                            outline: "none",
                                            cursor: "pointer",
                                            filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.10))"
                                        },
                                        pressed: {
                                            fill: "#6e1a25",
                                            stroke: "#ffffff",
                                            strokeWidth: 0.75,
                                            outline: "none",
                                        },
                                    }}
                                />
                            );
                        })
                    }
                </Geographies>
                <Annotation
                    subject={[32.8597, 39.9334]}
                    dx={-0}
                    dy={-0}
                    connectorProps={{
                        stroke: "#ffff",
                        strokeWidth: 0,
                        strokeLinecap: "round"
                    }}
                >
                    <image
                        href="/images/cizel-logo/cizel-logo-white.png"
                        x="-25"
                        y="-13"
                        width="32"
                        height="32"
                        opacity="1"
                        className="brightness-[8] select-none pointer-events-none"
                    />
                </Annotation>
            </ComposableMap>

            <Tooltip
                id="map-tooltip"
                place="top"
                delayShow={80}
                className="!rounded-md !border !border-white/10 !shadow-lg"
                style={{
                    backgroundColor: "rgba(17, 24, 39, 0.85)",
                    color: "#fff",
                    padding: "8px 10px",
                    backdropFilter: "blur(6px)",
                    WebkitBackdropFilter: "blur(6px)"
                }}
                arrowColor="rgba(17, 24, 39, 0.85)"
            />
        </section>
    );
}
