import aboutImage from "../../assets/images/aboutus.png";

export default function AboutHero() {
  return (
    <section className="min-h-[75vh] flex items-center">
      <div className="flex items-center gap-16 w-full">
        <div className="flex-1 max-w-4xl">
          <h2 className="text-5xl text-center mb-12 font-bold text-shadow-lg/10">
            About Us
          </h2>

          <p className="text-justify leading-7 text-lg">
            The Slenderman Research Foundation (SRF) is an independent organization dedicated to the documentation, preservation, and analysis of reports associated with the unidentified entity commonly referred to as Slenderman. Established following the first documented incidents of 1983, the Foundation was created by a small group of investigators, journalists, and archivists who recognized recurring patterns among unexplained disappearances and eyewitness testimonies that were consistently overlooked or dismissed by local authorities.
            <br />
            <br />
            Over the following decades, the Foundation expanded its archive by collecting witness statements, photographs, police records, handwritten journals, and other materials linked to reported encounters. Every submission is carefully cataloged and compared against existing case files in an effort to identify recurring locations, behavioral patterns, and historical connections. While the true nature and origin of the entity remain unknown, the Foundation continues its active investigation with a single objective: to preserve every piece of available evidence and provide a reliable historical record for future research.
          </p>

          <p className="text-justify leading-7 mt-6 text-lg">
            Despite decades of investigation, the phenomenon continues to defy conventional explanation. New reports are received every year from individuals with no known connection to previous cases, yet many describe remarkably similar encounters regardless of location, language, or background. These recurring patterns have strengthened the Foundation's commitment to maintaining an open archive, encouraging witnesses to come forward and ensuring that no credible account is lost or forgotten. Every testimony, photograph, or recovered document may represent another piece of a puzzle that remains incomplete.
          </p>
        </div>


        <div className="w-95 shrink-0">
          <img
            src={aboutImage}
            alt="Slenderman standing outside the door"
            className="mt-8 w-full border border-gray-400 shadow-md"
          />
        </div>
      </div>
    </section>
  );
}