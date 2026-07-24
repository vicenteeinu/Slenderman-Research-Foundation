import firstImage from "../../assets/images/first.jpg";
import secondImage from "../../assets/images/third.jpg";

export default function Hero() {
  return (
    <>
        <section>
        <h2 className="text-4xl font-bold text-shadow-lg/25">
            Who is Slenderman?
        </h2>

        <div className="flex gap-8 items-center">
            <div className="flex-1">
                <p className="text-justify text-lg">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
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

                    <h2 className="text-4xl font-bold text-shadow-lg/25 py-6">
                         Appearences
                    </h2>

                    <p className="text-justify text-lg">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                </div>


            </div>
        </section>
    </>
  );
}