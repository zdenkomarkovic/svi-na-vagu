import React from "react";
import { Calendar, MapPin, Clock, Users, FileText, Phone, Mail } from "lucide-react";

const page = () => {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
              Nacionalni seminar I kategorije
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prirodne metode unapređenja zdravlja
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 mt-8">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-green-600" />
              <span>23. oktobar 2025.</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-600" />
              <span>8:30 - 15:00h</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              <span>GO Zvezdara, Bulevar kralja Aleksandra 77</span>
            </div>
          </div>
        </div>

        {/* Important Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
            <FileText className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Akreditacija</h3>
            <p className="text-sm text-gray-600">
              Seminar je akreditovan odlukom Zdravstvenog saveta RS, br: 153-02-00131/2025-01
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Redni br: d-1-124/25
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
            <Users className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Bodovi</h3>
            <p className="text-sm text-gray-600">
              Predavačima: <strong>12 bodova</strong>
            </p>
            <p className="text-sm text-gray-600">
              Polaznicima: <strong>6 bodova</strong>
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
            <Users className="w-8 h-8 text-purple-600 mb-3" />
            <h3 className="font-semibold text-lg mb-2">Za kogo?</h3>
            <p className="text-sm text-gray-600">
              Nutricioniste - dijetetičare, sanitarnoekološke inženjere, medicinske sestre, zdravstvene tehničare, studente VMŠ
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">O seminaru</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Simpozijum ima za cilj da stručnoj i široj javnosti ukaže na neophodnost znanja o značaju:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Zastupljenosti u ishrani namirnica sa alkalizirajućim efektima i zdravstvenim benefitima
              </li>
              <li>
                Biološki vredne hrane iz prirode i njenog prepoznavanja s jedne i štetnosti industrijski procesuiranih namirnica u ishrani, koju karakteriše savremeni način života
              </li>
              <li>
                Primene različitih terapeutskih metoda unapređenja zdravlja, u zavisnosti od stanja organizma. Svrha primene ovih metoda (masaža, obloge, inhalacija, oralna primena itd.) je podsticaj organizma na balans biohemijskih procesa i jačanje imuniteta
              </li>
            </ul>
            <p className="mt-4 font-semibold text-gray-900">
              Uključivanje "divlje hrane" u ishranu, pravilno disanje, uravnotežena fizička i psihička aktivnost, komunikacija sa prirodom - ključni su faktori očuvanja zdravlja i prevencije bolesti.
            </p>
          </div>
        </div>

        {/* Program Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Program</h2>
          <div className="space-y-6">
            <ProgramItem
              time="08:30 - 09:00"
              title="Prijava učesnika"
            />
            <ProgramItem
              time="09:00 - 09:10"
              title="Otvaranje skupa"
            />
            <ProgramItem
              time="09:10 - 09:50"
              title="Namirnice sa alkalizirajućim efektom – zdravstveni benefiti"
              speaker="Spec. dr med. Jelena Đorđević, viši dijetetičar-nutricionista, Akademija strukovnih studija, Visoka zdravstvena škola, Beograd"
            />
            <ProgramItem
              time="09:50 - 11:30"
              title="Značaj zastupljenosti 'divlje' hrane iz prirode u ishrani"
              speaker="Nutricionista – dijetetičar Vesna Zečević, Predškolska ustanova 'Dečji dani', Beograd, u penziji od jula 2024."
            />
            <ProgramItem
              time="11:30 - 12:10"
              title="Bundeva u ishrani"
              speaker="Prof dr. Anđelka Lazarević, Vanredni profesor u oblasti Javno zdravlje pri Evropskom centru za mir i razvoj"
            />
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <p className="font-semibold text-yellow-800">Pauza: 12:10 - 12:40</p>
            </div>
            <ProgramItem
              time="12:40 - 13:10"
              title="Kraniosakralna terapija u tretmanu Bulimia nervosa"
              speaker="Spec. dr med. Natalija Solovjova, Akademija strukovnih studija, odsek Visoka zdravstvena škola, Beograd"
            />
            <ProgramItem
              time="13:10 - 13:50"
              title="Aroma terapija"
              speaker="Dijetetičar-nutricionista Milka Raičević, aromaterapeut, Dom Zdravlja 'Palilula' Beograd, u penziji od aprila 2019."
            />
            <ProgramItem
              time="13:50 - 14:00"
              title="Radionica"
              speaker="Dr. Jelena Đorđević, Vesna Zečević"
            />
            <ProgramItem
              time="14:00 - 15:00"
              title="Test za učesnike i anketa"
            />
          </div>
        </div>

        {/* Organization Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Organizacija</h2>
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Organizatori:</strong> Savet za zdravlje GO Zvezdara, Udruženje - SVI NA VAGU
            </p>
            <p className="text-gray-700">
              <strong>Predsednica Udruženja:</strong> Milka Raičević
            </p>

            <div className="mt-6">
              <h3 className="font-semibold text-xl mb-4">Počasni gosti</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dr Mirjana Mićević, spec. pedijatar</li>
                <li>• Dr Veroslava Stanković, dijetolog</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-xl mb-4">Predstavnici nutricionista</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ljubiša Knežević - predsednik društva dijetetičar nutricionista SUZRS</li>
                <li>• Rada Vejin - predsednik udruženje nutricionista dijetetičara Srbije UNDS</li>
                <li>• Jasna Jovanović - predstavnik dijetetičara nutricionista u KMSZTS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Registration Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6">Prijava i informacije</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Prijava učešća na simpozijumu je obavezna zbog ažuriranja spiskova.
            </p>
            <p className="text-lg">
              Zainteresovani učesnici mogu se učlaniti u Udruženje. Godišnja članarina iznosi <strong>1000 RSD</strong>.
            </p>
            <div className="bg-white/10 rounded-lg p-6 mt-6">
              <p className="text-xl font-semibold mb-4">Prijava i informacije na sajtu Udruženja:</p>
              <a
                href="https://www.svinavagu.rs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold underline hover:text-green-200 transition"
              >
                www.svinavagu.rs
              </a>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Kontakt osobe</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="font-semibold text-xl text-gray-900">Tamara Božić</h3>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-green-600" />
                <a href="tel:+381638654706" className="hover:text-green-600 transition">
                  063 8654 706
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-green-600" />
                <a href="mailto:tamarabozic333@gmail.com" className="hover:text-green-600 transition">
                  tamarabozic333@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-xl text-gray-900">Milka Raičević</h3>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-green-600" />
                <a href="tel:+381637794985" className="hover:text-green-600 transition">
                  063 7794 985
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 text-green-600" />
                <a href="mailto:milkaraicevic@gmail.com" className="hover:text-green-600 transition">
                  milkaraicevic@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component for program items
const ProgramItem = ({ time, title, speaker }: { time: string; title: string; speaker?: string }) => (
  <div className="border-l-4 border-green-600 pl-4 py-2">
    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
      <span className="font-semibold text-green-700 min-w-[120px]">{time}</span>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        {speaker && <p className="text-sm text-gray-600 mt-1">{speaker}</p>}
      </div>
    </div>
  </div>
);

export default page;
