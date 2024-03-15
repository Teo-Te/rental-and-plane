import Link from 'next/link'

export default function MakinaMeQera() {
    return (
        <>
        <div className="hero min-h-fit" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-full">
                    <h1 className="mb-5 text-5xl font-bold">Makina me Qera</h1>
                    <p className="mb-5">Prenotoni nje makine me qera</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-full bg-base-200">
            <div className="divider divider-neutral"></div>
        </div>
        <div className='flex space-x-4 px-4'>
            <div className="card w-96 h-60 sm:h-auto glass">
                <Link href={`/fluturime`}>
                    <figure><img src={`/bmw2.jpg`} alt="img"/></figure>
                    <div className="card-body p-6">
                        <h2 className="card-title justify-center text-base sm:text-xl">BMW 4 Series</h2>
                        <div className="card-actions pt-2 justify-center">
                        <p className="btn btn-ghost sm:text-xl text-base">€ 70/dita</p>
                        </div>
                    </div>
                </Link>
            </div>
            <div className="card w-96 h-60 sm:h-auto glass">
                <Link href={`/makina-me-qera/mercedes`}>
                    <figure><img src={`/mercedes.jpg`} alt="img"/></figure>
                    <div className="card-body p-6">
                        <h2 className="card-title justify-center text-base sm:text-xl">Mercedes E Class</h2>
                        <div className="card-actions pt-2 justify-center">
                        <p className="btn btn-ghost sm:text-xl text-base">€ 50/dita</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}