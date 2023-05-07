import Image from "next/image";


export default function Home() {
  return (
  <main>
    <div className="shadow-sm p-8 bg-white-blue">
      <div className="flex w-auto h-64 bg-[url('https://cahyaaji.github.io/mtj-landing-pages/mtj_banner.png')] bg-contain bg-center bg-no-repeat"/>
      <h1 className="mx-auto text-center font-bold text-blue-deep max-w-3xl">Ini dapat diisi dengan deskripsi pendek, 1 sampai 3 kalimat. Ini dapat diisi dengan deskripsi pendek, 1 sampai 3 kalimat.</h1>
    </div>
    <div className="text-center">
      <div className="flex mx-16 p-4 w-auto max-h-fit shadow-lg justify-evenly">
        <div>
          <Image src='soundoke.png' alt="sewa" width='480' height='440' style={{objectFit:"cover", borderRadius: "10px"}}/>
        </div>
        <div className="max-w-md text-left">
          <h1 className="text-lg pb-2">MJT Entertainment</h1>
          <h2>Sewa Keperlua Even. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, dignissimos!</h2>
          <h3>-Lorem ipsum dolor sit amet.</h3>
          <h3>-Lorem ipsum dolor sit amet.</h3>
          <h3>-Lorem ipsum dolor sit amet.</h3>
        </div>
      </div>
      <div></div>
    </div>
  </main>
  )
}