import Image from "next/image";
import ProductPage from "./product/page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <section>
        <Image src="/svg-laptop/Banner.svg" alt="Banner" width={0} height={0} sizes="100vw" className="hidden md:block w-full h-auto object-cover" />
        <Image src="/svg-mobile/Banner.svg" alt="Banner" width={0} height={0} sizes="100vw" className="md:hidden w-full h-auto object-cover" />
      </section>
      <section>
        <Image src="/svg-laptop/Smaller Banners.svg" alt="Banner" width={0} height={0} sizes="100vw" className="hidden md:block w-full h-auto object-cover" />
        {/* <Image src="/svg-mobile/Banner.svg" alt="Banner" width={0} height={0} sizes="100vw" className="md:hidden w-full h-auto object-cover" /> */}
      </section>
      <section>
        <Image src="/svg-laptop/Category.svg" alt="Banner" width={0} height={0} sizes="100vw" className="hidden md:block w-full h-auto object-cover" />
        {/* <Image src="/svg-mobile/Banner.svg" alt="Banner" width={0} height={0} sizes="100vw" className="md:hidden w-full h-auto object-cover" /> */}
      </section>
      <section>
        <Image src="/svg-laptop/Products.svg" alt="Banner" width={0} height={0} sizes="100vw" className="hidden md:block w-full h-auto object-cover" />
        {/* <Image src="/svg-mobile/Banner.svg" alt="Banner" width={0} height={0} sizes="100vw" className="md:hidden w-full h-auto object-cover" /> */}
      </section>
      <section>
        <Image src="/svg-laptop/Banners.svg" alt="Banner" width={0} height={0} sizes="100vw" className="hidden md:block w-full h-auto object-cover" />
        {/* <Image src="/svg-mobile/Banner.svg" alt="Banner" width={0} height={0} sizes="100vw" className="md:hidden w-full h-auto object-cover" /> */}
      </section>
      <section>
        <Image src="/svg-laptop/Discount Products.svg" alt="Banner" width={0} height={0} sizes="100vw" className="hidden md:block w-full h-auto object-cover" />
        {/* <Image src="/svg-mobile/Banner.svg" alt="Banner" width={0} height={0} sizes="100vw" className="md:hidden w-full h-auto object-cover" /> */}
      </section>
      <section>
        <Image src="/svg-laptop/Banner 2.svg" alt="Banner" width={0} height={0} sizes="100vw" className="hidden md:block w-full h-auto object-cover" />
        {/* <Image src="/svg-mobile/Banner.svg" alt="Banner" width={0} height={0} sizes="100vw" className="md:hidden w-full h-auto object-cover" /> */}
      </section>
    </main>
  );
}
