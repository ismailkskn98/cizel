import React from 'react'

export default async function ProjectsCityPage({ params }) {
    const { city } = await params;
    return (
        <div>ProjectsCityPage - {city}</div>
    )
}
