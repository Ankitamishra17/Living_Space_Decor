import Link from "next/link";
import Image from "next/image";
import { locations } from "@/data/locations";

export default function LocationsPage() {
  return (
    <main>
      {/* Hero */}

      <section className="py-20 bg-[#F5EBE0] text-center">
        <h1 className="text-5xl font-bold">
          Interior Design Services by Location
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Choose your location to explore our interior design services.
        </p>
      </section>

      {/* Location Cards */}

      <section className="max-w-7xl mx-auto py-20">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <Image
                src={location.image}
                alt={location.title}
                width={400}
                height={280}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold">{location.title}</h2>

                <p className="mt-3 text-gray-600">{location.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
