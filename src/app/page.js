import Image from "next/image";
import FtCategories from "@/components/FtCategories";
import Jumbotron from "@/components/Jumbotron";
import { authUserGithub } from "@/libs/auth";
import PopulerPeripherals from "@/components/PopulerPheriperals";

export default async function Home() {
  const authUser = await authUserGithub()
  return (
    <main className="">
      <Jumbotron authUser={authUser}/>
      <section className='xl:px-16 sm:px-4 max-sm:px-4'>
          <FtCategories />
          <PopulerPeripherals />
      </section>
    </main>
  );
}
