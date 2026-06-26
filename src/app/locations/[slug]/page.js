import { notFound } from "next/navigation";
import Image from "next/image";
import { locations } from "@/data/locations";

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${location.title} | Living Space Decor`,
    description: location.description,
  };
}

export default async function LocationPage({ params }) {
  const { slug } = await params;

  const location = locations.find((item) => item.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <Image
          src={location.image}
          alt={location.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold">{location.title}</h1>

            <p className="mt-5 max-w-3xl mx-auto text-lg md:text-xl">
              {location.description}
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto py-20 px-5">
        <h2 className="text-4xl font-bold text-[#3D1F0D]">
          About Our Interior Design Services
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-8">
          Living Space Decor provides premium residential and commercial
          interior design services in <b>{location.city}</b>. Our expertise
          includes modular kitchens, wardrobes, bedrooms, living rooms, false
          ceilings, lighting, furniture, and turnkey interior solutions.
        </p>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto py-12 px-5">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Modular Kitchen",
            "Design Ideas",
            "Wardrobe",
            "Lighting",
            "Architecture",
            "Furniture",
          ].map((service) => (
            <div
              key={service}
              className="border rounded-xl p-8 hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold">{service}</h3>

              <p className="mt-4 text-gray-600">
                Premium {service.toLowerCase()} services in {location.city}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5EBE0] py-20 mt-16">
        <div className="max-w-4xl mx-auto text-center px-5">
          <h2 className="text-4xl font-bold">
            Looking for Interior Designers in {location.city}?
          </h2>

          <p className="mt-5 text-gray-600">
            Book a free consultation today and transform your dream home with
            Living Space Decor.
          </p>

          <button className="mt-8 bg-[#3D1F0D] text-white px-8 py-4 rounded hover:bg-[#B8851F] transition">
            Book Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
