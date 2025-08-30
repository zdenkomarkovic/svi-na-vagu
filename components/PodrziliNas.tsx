import Image from "next/image";

const PodrziliNas = () => {
  const organizacije = [
    {
      ime: "Aleksandrija Fruska Gora doo",
      slika: "/aleksandrija.png"
    },
    {
      ime: "Donorstvo je herojstvo",
      slika: "/donorstvo.jpg"
    },
    {
      ime: "Plavi Krug",
      slika: "/plavikrug.png"
    },
    {
      ime: "ŽENA+",
      slika: "/zenaplus.jpg"
    },
    {
      ime: "Odeon pozorište",
      slika: "/odeon.svg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Podržali su nas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zahvaljujemo se organizacijama koje su podržale naše aktivnosti i pomogle nam da ostvarimo naše ciljeve
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {organizacije.map((org, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-6 flex flex-col items-center justify-center min-h-[200px]"
            >
              <div className="relative h-24 w-full mb-4">
                <Image
                  src={org.slika}
                  alt={org.ime}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-800 text-center leading-tight">
                {org.ime}
              </h3>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full">
            <p className="text-sm font-medium">
              💙 Donatorstvo je herojstvo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodrziliNas;
