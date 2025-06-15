import { useRouter } from "next/router";

const router = useRouter();

<button onClick={() => router.back()} className="text-blue-500 underline mb-4">
  ← Go Back
</button>
export default function About() {
  return (
    <section className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Our Firm</h1>
      <p className="text-lg leading-7 mb-4">
        Established over 100 years ago by our forefathers, <strong>BSNK Law Associates</strong> stands as a legacy of trust,
        expertise, and service in the legal community.
      </p>
      <p className="text-lg leading-7 mb-4">
        With decades of experience, we provide comprehensive legal solutions across a range of practice areas — from
        civil disputes to banking cases, from criminal law to specialized legal opinions.
      </p>
      <p className="text-lg leading-7">
        Our team combines timeless legal traditions with a modern approach, offering tailored strategies to help our clients
        resolve their disputes efficiently and effectively.
      </p>
    </section>
  );
}
