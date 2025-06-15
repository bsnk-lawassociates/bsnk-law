import { useRouter } from "next/router";

const router = useRouter();

<button onClick={() => router.back()} className="text-blue-500 underline mb-4">
  ← Go Back
</button>
export default function Services() {
  return (
    <section className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Our Services</h1>

      <Service
        number="1️⃣"
        title="Cooperative Matters"
        description="We advise and represent Cooperative Societies and members in disputes, transactions, and legal procedures related to their formation, governance, and dissolution."
      />
      <Service
        number="2️⃣"
        title="Bank Matters"
        description="Our expertise covers SARFAESI proceedings, Debt Recovery Tribunal (DRT) cases, Debt Recovery Appellate Tribunal (DRAT) cases, legal opinions for banking transactions, and recovery of dues."
      />
      <Service
        number="3️⃣"
        title="Civil Law"
        description="We handle a broad spectrum of civil cases — from property disputes and injunctions to succession, probate, contracts, and torts — representing both plaintiffs and defendants with diligence and discretion."
      />
      <Service
        number="4️⃣"
        title="Criminal Law"
        description="Our practice comprises defense, trial, and appeal of criminal cases, guiding clients through investigations, filing complaints, securing bails, and protecting their legal rights at all stages."
      />
      <Service
        number="5️⃣"
        title="Municipal Law"
        description="We advise on matters related to municipal corporations, civic authorities, land use, zoning, and disputes with local bodies, helping resolve issues efficiently and in conformity with regulations."
      />
      <Service
        number="6️⃣"
        title="Urban Land Ceiling Law"
        description="We specialize in cases arising under the Urban Land Ceiling and Regulation Act and related legislation, protecting property rights and addressing excess land holdings."
      />
      <Service
        number="7️⃣"
        title="Urban Development Law"
        description="Our practice covers matters relating to land development, town planning, and redevelopment projects, guiding stakeholders through policy, procedure, and disputes."
      />
      <Service
        number="8️⃣"
        title="High Court Matters"
        description="With extensive experience in High Court litigation, we handle writ petitions, appeals, revision cases, and other disputes before the Hon’ble High Court."
      />
      <Service
        number="9️⃣"
        title="Legal Consulting Services"
        description="We provide tailored legal counsel and opinions to businesses, organizations, and individuals, helping them navigate complex legal issues and make informed decisions."
      />
    </section>
  );
}

function Service({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">
        {number} {title}
      </h2>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}
