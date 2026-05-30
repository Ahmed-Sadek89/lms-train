import Topnav from './components/top-nav'
import FirstNav from './components/first-nav'

const PublicHeader = () => {
    return (
        <header className='contents overflow-x-hidden w-full'>
            <Topnav />
            <FirstNav />
        </header>
    )
}

export default PublicHeader
