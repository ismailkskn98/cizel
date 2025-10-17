import Projects from '@/components/projects';
import React from 'react'

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

const getProjectsByCity = async (cityOrSlug) => {
    try {
        const response = await fetch(`${base_url}/api/site/projects?city=${cityOrSlug}`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}

const getProjectsByProjectStatus = async (projectStatus) => {
    try {
        const response = await fetch(`${base_url}/api/site/projects?status=${projectStatus}`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        const responseData = await response.json();
        return responseData.data || [];
    } catch (error) {
        console.error(error);
        return [];
    }
}


export default async function ProjectsCityPage({ params }) {
    const { cityOrSlug } = await params;
    const projectStatusSlugMap = {
        "tamamlanan-projeler": "Tamamlanan Projeler",
        "devam-eden-projeler": "Devam Eden Projeler",
    };
    const isValidCity = Object.keys(projectStatusSlugMap).includes(cityOrSlug);

    let projects = [];
    let city = false;
    let projectStatusName = null;

    if (isValidCity) {
        /*
            {
                id: 10,
                location: 'Balıkesir',
                project_status: 'tamamlanan-projeler',
                json_template: '{"title":"{\\"tr\\":\\"BALIKESİR BURHANİYE DÜĞÜN SALONU\\",\\"en\\":\\"Wedding Hall in Burhaniye, Balıkesir\\"}","location":"Ankara","jobType":"{\\"tr\\":[\\"Düğün Salonu\\"],\\"en\\":[\\"Wedding Hall\\"]}","projectStatus":"{\\"tr\\":\\"Tamamlanan Projeler\\",\\"en\\":\\"Completed Projects\\"}","projectStatusSlug":"\\"tamamlanan-projeler\\"","administration":"NUROL HOLDİNG","projectName":"{\\"tr\\":\\"BALIKESİR BURHANİYE DÜĞÜN SALONU İNŞAATI YAPIM İŞİ\\",\\"en\\":\\"Balıkesir Burhaniye Wedding Hall Construction Works\\"}","slug":"balikesir-burhaniye-dugun-salonu","year":"2021","coverImage":"/uploads/covers/1760425596484-fdgvfbh.jpg","images":["/uploads/images/1760425596484-fdgvfbh.jpg","/uploads/images/1760425596486-img-20220301-wa0011.jpg"],"videoUrl":null,"createdAt":"2025-10-14T07:06:36.488Z","updatedAt":"2025-10-14T08:07:18.151Z"}',
                slug: 'balikesir-burhaniye-dugun-salonu'
            },
        */
        projects = await getProjectsByProjectStatus(cityOrSlug);
        city = false;
        projectStatusName = projectStatusSlugMap[cityOrSlug];
    } else {
        /*
            {
                id: 17,
                location: 'Malatya',
                project_status: 'tamamlanan-projeler',
                json_template: '{"title":"{\\"tr\\":\\"MALATYA İLİ 21. ETAP KIRSAL 202 ADET DEPREM KONUTU\\",\\"en\\":\\"202 Rural Earthquake Houses – 21st Phase, Malatya Province\\"}","location":"İstanbul","jobType":"{\\"tr\\":[\\"Konut\\"],\\"en\\":[\\"Residential\\"]}","projectStatus":"{\\"tr\\":\\"Tamamlanan Projeler\\",\\"en\\":\\"Completed Projects\\"}","projectStatusSlug":"\\"tamamlanan-projeler\\"","administration":"T.C. ÇEVRE, ŞEHİRCİLİK VE İKLİM DEĞİŞİKLİĞİ BAKANLIĞI","projectName":"{\\"tr\\":\\"MALATYA İLİ 21. ETAP KIRSAL 202 ADET DEPREM KONUTU YAPIM İŞİ\\",\\"en\\":\\"Malatya Province 21st Phase – Construction Works for 202 Rural Earthquake Houses\\"}","slug":"malatya-ili-21-etap-kirsal-202-adet-deprem-konutu","year":"2023","coverImage":"/uploads/covers/1760426340045-img-20251012-wa0015.jpg","images":["/uploads/images/1760426340047-img-20251012-wa0015.jpg","/uploads/images/1760426340049-img-20251012-wa0016.jpg","/uploads/images/1760426340050-img-20251012-wa0017.jpg"],"videoUrl":null,"createdAt":"2025-10-14T07:19:00.056Z","updatedAt":"2025-10-14T08:10:53.765Z"}',
                slug: 'malatya-ili-21-etap-kirsal-202-adet-deprem-konutu'
            }
        */
        projects = await getProjectsByCity(cityOrSlug);
        city = true;
    }

    return (
        <Projects projects={projects} city={city} projectStatusName={projectStatusName} />
    )
}
