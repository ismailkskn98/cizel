import React from 'react'

export default function ProjectCitySlugPage({ params }) {
    const { city, slug } = params;
    return (
        <div>ProjectCitySlugPage - {city} - {slug}</div>
    )
}
