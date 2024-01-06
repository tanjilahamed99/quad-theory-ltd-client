import Banner from "@/Components/Banner";
import Navbar from "@/Components/Navbar";
import Popular from "@/Components/Popular";

export default function Home() {
  return (
    <div className='container mx-auto my-5'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Popular></Popular>
    </div>
  )
}
