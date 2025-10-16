import Contact from '@/components/contact'
import React from 'react'

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;
const getContact = async () => {
    try {
        const response = await fetch(`${base_url}/api/site/contact`, { next: { revalidate: 10 } });
        if (!response.ok) {
            throw new Error('Failed to fetch contact');
        }
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}
// const getFaq = async () => {
//     try {
//         const response = await fetch(`${base_url}/api/site/faq`, { next: { revalidate: 10 } });
//         if (!response.ok) {
//             throw new Error('Failed to fetch FAQ');
//         }
//         const responseData = await response.json();
//         return responseData.data || [];
//     } catch (error) {
//         console.error(error);
//         return [];
//     }
// }

export default async function ContactPage({ params }) {
    const { locale } = await params;
    const [contactData] = await Promise.all([getContact()]);
    return (
        <Contact contactData={contactData} />
    )
}
