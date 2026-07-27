import firstImage from "../../assets/images/first.jpg";
import secondImage from "../../assets/images/third.jpg";

export default function Hero() {
  return (
    <>
        <section>
        <h2 className="text-4xl font-bold text-shadow-lg/10">
            Who is Slenderman?
        </h2>

        <div className="flex gap-8 items-center">
            <div className="flex-1">
                <p className="text-justify text-lg">Slenderman is an unidentified humanoid entity associated with unexplained disappearances, psychological disturbances, and recurring eyewitness reports across multiple regions. Described as an unnaturally tall figure with elongated limbs, a featureless white face, and a dark formal suit, the entity is most often observed standing at the edge of forests, abandoned structures, or isolated roads. Witnesses frequently report feelings of intense unease, memory gaps, electronic interference, and distorted perception before or after a sighting. Although no verified explanation for its origin exists, consistent patterns in testimonies suggest deliberate observation rather than random appearances. Individuals who encounter the entity are strongly advised to leave the area immediately, avoid direct contact, and document all details while memories remain intact.</p>
            </div>

            <div className="flex-1">
                <img className="w-full h-auto shadow-md " src={firstImage} alt="Illustration of Slenderman standing in a forest" />
            </div>
        </div>
        </section>

        <section className="mt-6">
            <div className="flex gap-8 items-start">

                <div className="flex-1">
                    <img className="w-full h-auto shadow-md" src={secondImage} alt="Illustration of Slenderman standing in a forest" />
                </div>

                <div className="flex-1">

                    <h2 className="text-4xl font-bold text-shadow-lg/10 py-6">
                         First Appearances
                    </h2>

                    <p className="text-justify text-lg">The earliest known records linked to the Slenderman phenomenon date back to the summer of 1983, when a series of photographs recovered from an undeveloped film roll depicted an unusually tall figure standing behind groups of children moments before several unexplained disappearances. According to archived police reports, fourteen children vanished without witnesses, while the photographer responsible for capturing the images was reported missing shortly after the investigation began. Although authorities attributed the incident to unknown circumstances, the recovered photographs remain among the earliest pieces of evidence associated with the entity. Since then, similar descriptions have surfaced across different countries and decades, suggesting that the phenomenon predates modern documentation and continues to manifest under remarkably consistent conditions. In 1986, investigators recovered a partially burned photograph from the remains of the Sterling City Public Library after a fire destroyed much of its historical archive. The image shows a tall, faceless figure standing behind several unidentified individuals near a wooded area. Although the fire was officially ruled accidental, Foundation analysts identified strong similarities to evidence collected during the 1983 case, reinforcing the possibility that the same unidentified entity had been observed on multiple occasions.</p>
                </div>


            </div>
        </section>
    </>
  );
}