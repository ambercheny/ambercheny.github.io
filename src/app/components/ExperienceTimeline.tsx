export default function ExperienceTimeline() {
  const experiences = [
    {
      title: "Safety Committee Member",
      organization: "Hadlock Lab, Institute for Systems Biology",
      organizationUrl: "https://hadlock.isbscience.org/",
      period: "Mar 2025 - Present",
      show_period: "2025",
      description: "Served as the primary liaison between the Hadlock Lab and the ISB Safety Committee, ensuring lab-wide alignment with institutional protocols and safety standards."
    },
    {
      title: "Research Assistant",
      organization: "Department of Laboratory Medicine & Pathology, University of Washington, Foy Lab",
      organizationUrl: "https://foylab.xyz/",
      period: "Sep 2024 - Present",
      show_period: "",
      description: "Developing methods for deep hematologic phenotyping using flow cytometry data, electronic health record data mining, creating SQL data pipeline for data cleaning and transformation, building deep learning models for single-cell data."
    },
    {
      title: "Clinical Informaticist",
      organization: "Institute for Systems Biology",
      organizationUrl: "https://isbscience.org/",
      period: "Feb 2024 - Jul 2024",
      show_period: "2024",
      description: "Electronic health record data mining, creating and validating computational phenotypes, medication-related feature validation, survival analysis and prediction, chart abstraction."
    },
    {
      title: "American Medical Informatics Association Volunteer",
      organization: "American Medical Informatics Association",
      organizationUrl: "https://amia.org/",
      period: "2023 - Present",
      show_period: "2023",
      description: "Led the literature synthesis for the AMIA Year-In-Review, evaluating 100+ papers to provide the informatics community with a strategic roadmap of key industry shifts."
    },
  ];

  return (
    <section className="py-8 bg-[#0B2B40]">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Career Roadmap
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative pl-14 md:pl-0">
            {/* Vertical Timeline Line */}
            <div className="absolute left-16 md:left-4 top-0 bottom-0 w-0.5 bg-white/30"></div>

            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-[3.875rem] md:left-1.5 top-6 w-5 h-5 rounded-full bg-white border-4 border-primary-500 shadow-md z-10"></div>

                  {/* Year Label on Timeline */}
                  {exp.show_period && (
                    <div className="absolute left-2 md:-left-14 top-6 text-base md:text-2xl font-bold text-white whitespace-nowrap">
                      {exp.show_period}
                    </div>
                  )}

                  {/* Content on Right */}
                  <div className="ml-20 md:ml-10 flex-1">
                    {/* <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow border-l-2 border-white"> */}
                    <div className="py-2">
                      <div className="mb-2">
                        <h3 className="font-heading text-xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col md:flex-row md:items-center md:gap-3 text-sm">
                          <a
                            href={exp.organizationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-20 text-white font-semibold hover:text-white/80 hover:underline transition-all"
                          >
                            {exp.organization}
                          </a>
                          <span className="text-20 text-white/80">
                            • {exp.period}
                          </span>
                        </div>
                      </div>
                      <p className="text-20 text-white/90 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
