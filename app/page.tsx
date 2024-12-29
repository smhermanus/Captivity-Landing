import { HeroSlider } from './components/Hero-slider'
import { Section1 } from './components/Section1'
import { Section2 } from './components/Section2'
import { ProductTabs } from './components/Product-tabs'
import { RegisterSection } from './components/RegisterSection'
import { PlatformSection } from './components/PlatformSection'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="h-[600px] bg-captivity-dark">
        <div className="h-[400px] md:h-[600px]">
          <HeroSlider />
        </div>
      </section>

      {/* Services Section */}
      <Section1 />

      {/* Categories Grid Section */}
      <Section2 />

      <RegisterSection />

      {/* Product Tabs Section */}
      <ProductTabs />

      {/* Platform and FWRD Section */}
      <PlatformSection />
    </div>
  )
}
