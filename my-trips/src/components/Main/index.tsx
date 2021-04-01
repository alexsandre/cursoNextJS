import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const Main = () => {
  return <Map />
}

export default Main
