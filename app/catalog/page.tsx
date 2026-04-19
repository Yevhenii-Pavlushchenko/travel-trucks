'use client'
import css from './catalog.module.css'

import CampersList from '@/components/CampersList/CampersList'
import Sidebar from '@/components/Sidebar/Sidebar'
import { CamperFilters } from '@/types/filters'
import { useState } from 'react'



export default function CatalogPage() {

    const [activeFilters, setActiveFilters] = useState<CamperFilters>({})
    
    const handleSearch = (newFilters: CamperFilters) => {
        setActiveFilters(newFilters)
    }
    
    return (
        <main className={css.container}>
                <Sidebar onSearch={handleSearch}/>
                <CampersList filters={activeFilters}/>
            
        </main>
    )
}