// import Image from "next/image";
import AppHeader from "@/components/AppHeader/Index";
import './nicepage.css'
import './index.css'
import BannerSection from "@/components/BannerSection";
import SingleEvent from "@/components/SingleEvent";
import MissionSection from "@/components/MissionSection";
import GallerySection from "@/components/GallerySection";
import LifeCoachingSection from "@/components/LifeCoachingSection";
import StatisticsSection from "@/components/StatisticsSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";
import LogoBanner from "@/components/AppHeader/LogoBanner";
import AuthPage from "@/components/AppHeader/AuthPage";

export default function Home() {
  const auth = true;
  return (
    <div>
      <AppHeader />
      {auth && <LogoBanner />}
      {!auth && <AuthPage />}
      <BannerSection />
      <SingleEvent />
      <MissionSection />
      <GallerySection />
      <LifeCoachingSection />
      <StatisticsSection />
      <LocationSection />
      <FooterSection />
    </div>
  );
}

  // 0741821916, 0755295705