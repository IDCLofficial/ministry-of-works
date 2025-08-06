import Image from "next/image";
import Link from 'next/link';

export default function SkillUpSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch justify-center gap-8 py-8 px-4">
      {/* Left: Project Image */}
      <div className="w-[90%] md:w-[40%] flex items-stretch">
        <div className="relative w-full h-[300px] md:h-full min-h-[300px]">
          <Image src="/images/flyover.png" alt="Owerri–Elele Road Project" fill className="object-cover rounded" />
        </div>
      </div>

      {/* Right: Project Text */}
      <div className="w-[90%] md:w-[55%] flex-1 flex flex-col justify-center items-start max-w-2xl px-2 min-h-0">
        <h2 className="text-xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Rebuilding Connectivity: Owerri–Elele Road & Flyover Project
        </h2>
        <p className="text-gray-500 text-sm md:text-md lg:text-lg mb-8 max-w-[700px]">
          In May 2025, the Imo State Ministry of Works awarded the reconstruction of the 35-kilometer Owerri–Elele Road to Craneburg Construction Company. This major project also includes the development of the flyover at the Control-Post interchange, near Assumpta Cathedral—a long-standing traffic congestion point in Owerri.

          The project aims to enhance inter-state access between Imo and Rivers States, ease daily traffic flow, and support economic activities by linking key industrial and residential zones. Once completed, it will significantly improve safety, reduce travel time, and promote regional commerce across South-East and South-South Nigeria.
        </p>
        <div className="flex flex-row gap-4 mt-4 overflow-x-auto whitespace-nowrap pb-2">
          <Link href="/services" style={{ paddingTop: '.5rem', paddingBottom: '.5rem' }} className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded text-lg transition-colors min-w-[140px] text-center">
            Our Services
          </Link>
          <Link href="/contact-us" style={{ paddingTop: '.5rem', paddingBottom: '.5rem' }} className="border border-green-700 text-green-700 font-semibold px-8 py-2 rounded text-lg hover:bg-green-50 transition-colors min-w-[160px] text-center">
            Contact Ministry
          </Link>
        </div>
      </div>
    </section>
  );
}
