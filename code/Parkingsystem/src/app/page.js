import Image from "next/image";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import { Poppins } from "next/font/google";
import Layout from "./components/layout/Layout";
import Feature from "./components/feature/Feature";


const poppins= Poppins({ subsets: ["latin"], weight:["400","500","600","700","800"] });


export default function Home() {
  return (
   <div className={poppins.className}>  
    <Layout>
        <Hero id={"hero-component"}/>
        <Feature id={"feature-component"}/>
    </Layout>
   </div>
  );
}
