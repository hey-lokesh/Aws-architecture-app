export default function StatsBar() {
    return (
        <div
            className="
      mt-20
      bg-white
      rounded-3xl
      shadow-lg
      p-8
      grid
      md:grid-cols-4
      gap-8
      "
        >
            <div>
                <h3 className="font-bold text-2xl">
                    10K+
                </h3>
                <p>Architects</p>
            </div>

            <div>
                <h3 className="font-bold text-2xl">
                    99.99%
                </h3>
                <p>Validated Designs</p>
            </div>

            <div>
                <h3 className="font-bold text-2xl">
                    IaC
                </h3>
                <p>Terraform Ready</p>
            </div>

            <div>
                <h3 className="font-bold text-2xl">
                    AWS
                </h3>
                <p>Best Practices</p>
            </div>
        </div>
    );
}