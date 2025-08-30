import Image from "next/image";

const PrveClanice = () => {
  const slike = [
    "/IMG-369c8ee6e87472a9691b0a565906ff65-V (1).jpg",
    "/IMG-84bd4da1fa9d13dbee20aac487f168fc-V (1).jpg",
    "/IMG-055a4c88646840b2d914938cd3b26dfd-V (1).jpg",
    "/IMG-1c7552308ed8ba45b5163340f5e2747c-V.jpg"
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Prve članice udruženja
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            One su bile prve članice Udruženja &quot;Svi na vagu&quot; - tada studenti, danas uspešni nutricionisti
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {slike.map((slika, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={slika}
                  alt={`Prva članica ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Prve članice udruženja &quot;vi na vagu&quot;
            </h3>
            <div className="text-lg text-gray-700 space-y-2">
              <p>• Milica Kovacevic</p>
              <p>• Milena Stojanović</p>
              <p>• Ivana Dabić</p>
              <p>• Teodora (Tošić) Vještica</p>
              <p>• Sofija Kostić Vuković</p>
              <p>• Jelena (Petković) Vuković</p>
              <p>• Tanja Olajdžija</p>
            </div>
            <div className="mt-8 inline-block bg-green-100 text-green-800 px-6 py-3 rounded-full">
              <p className="text-sm font-medium">
                🌟 Inspiracija za sve buduće nutricioniste
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrveClanice;
