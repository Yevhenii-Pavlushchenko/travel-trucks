import css from './catalog.module.css'

import CampersList from '@/components/CampersList/CampersList'
import Sidebar from '@/components/Sidebar/Sidebar'



export default function CatalogPage() {
    
    return (
        <main className={css.container}>
                <Sidebar/>
            
                <CampersList/>
            
        </main>
    )
}