import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Popular from "@/components/Popular";
import Recommended from "@/components/Recommended";

export default function Home() {
  return (
    <div className='container mx-auto my-5'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Popular></Popular>
      <Recommended></Recommended>
      <Footer></Footer>
    </div>
  )
}
