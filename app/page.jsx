import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">Miresevini</h1>
          <p className="mb-5">Ketu ndoshta te shkurhet dicka ne lidhje me shrebimet apo faqen sipas deshires</p>
          <div className="flex flex-col sm:flex-row w-full pt-4">
            <div className="card w-96 glass">
              <figure><img src={`/flight.jpg`} alt="img"/></figure>
              <div className="card-body">
                <h2 className="card-title justify-center">Rezervo nje fluturim</h2>
                <div className="card-actions pt-2 justify-center">
                  <Link href={`/fluturime`} className="btn btn-primary">Kliko ketu</Link>
                </div>
              </div>
            </div>
            <div className="divider divider-vertical sm:divider-horizontal">&</div>
            <div className="card w-96 glass">
              <figure><img src={`/rental.jpeg`} alt="img"/></figure>
              <div className="card-body">
                <h2 className="card-title justify-center">Makina me Qera</h2>
                <div className="card-actions justify-center pt-2">
                  <Link href={`/makina-me-qera`} className="btn btn-primary">Kliko ketu</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
