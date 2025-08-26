import React from "react";
import Image from "next/image";

// Automatski generisana lista slika iz public/images
const images = [
  // Nove slike
  "IMG-027e442f8a7ab23e4888092424edbcdb-V.jpg",
  "IMG-a69c554c6276aae7f7060c60f42553c1-V.jpg",
  "IMG-84bd4da1fa9d13dbee20aac487f168fc-V.jpg",
  "IMG-369c8ee6e87472a9691b0a565906ff65-V.jpg",
  "IMG-055a4c88646840b2d914938cd3b26dfd-V.jpg",
  "IMG-00bd3ff26ad1335284a787f50dc1a5df-V.jpg",
  "IMG-ed2631868b90c5b4e3a9f88c2899828d-V.jpg",
  // Postojeće slike
  "downloadgram.org_486572832_640499948732415_5725013419407489923_n.jpg",
  "downloadgram.org_464076821_853772746740051_246370970496493474_n.jpg",
  "downloadgram.org_486570965_639305288851881_1584740802400034770_n.jpg",
  "downloadgram.org_486533051_638021515646925_3624123932327772572_n.jpg",
  "downloadgram.org_485962647_636285175820559_3954937163904357321_n.jpg",
  "downloadgram.org_485591584_636285159153894_3947818283031858234_n.jpg",
  "downloadgram.org_438932549_806986297990324_8423259026627126078_n.jpg",
  "downloadgram.org_485141572_634848619297548_7648639139889895898_n.jpg",
  "downloadgram.org_486576202_640506918731718_8827315958634017166_n.jpg",
  "downloadgram.org_480871537_17894305797165134_880692814854646976_n.jpg",
  "downloadgram.org_499931065_683384871110589_5679318539057500218_n.jpg",
];

const videos = [
  "downloadgram.org_AQMI5QmmzjVhVEbmxqfMW2wcRnGPIUIupPHXznaN2471yHOq6pTg6jqug0Itt54ymBRjzSa8mHKrhKFnO1GmpA4WiZcQ4LNn_bo__7k.mp4",
  "downloadgram.org_AQM749EqkJzhpzpwkobElId8_Bongo5UPiHNacTrSSd2xLgIakHgAJZw-nV7ux9rcfKdvGZqnd628UqWx0fN3XirzIPUntzOtwuLyJk.mp4",
  "downloadgram.org_AQOvlUcBiZH0Fsc-qh2BXMNInbq3Ly8K3DX6tYMVtYKJidOzdc0mHNkeOTKOtU1Myni-Flu5wCxC9O4bzn9Qi3z6ui_3MVFZDWYAhAk.mp4",
  "downloadgram.org_AQPVm7TMq0XUyqChEz3IcHDi73LbKgCAgomfmrNjK1bxcc5m11cwoSAjlY0j1HceXbDOPJt_pMIVj8sqD3-SVfTARs4212v-hpTLc3c.mp4",
  "downloadgram.org_AQORKw3GnhoaN93tr-PVh89K7X1CkpCOIjRa8vePrZmVwEpuSBQQplVQNVEuO2NLMtFLtT560G0rt6yw2k88oT0glD_5ZBFtXXQ9kDs (1).mp4",
  "downloadgram.org_AQORKw3GnhoaN93tr-PVh89K7X1CkpCOIjRa8vePrZmVwEpuSBQQplVQNVEuO2NLMtFLtT560G0rt6yw2k88oT0glD_5ZBFtXXQ9kDs.mp4",
  "downloadgram.org_AQOotsVW9hgmGArMcr-pDopXZWC3UUx-xfnIXtRJxreVKHtr0APcrXfilLyljsDla_yHXa1QXEJE5nVWLCX311VtkYA_NzVEUHyh9YY.mp4",
  "downloadgram.org_AQOeRq_m7OttEuyZBZND_E4-3pqxxNGOSU_D5Fq3bDKz38JMwpwx5TNLAcHfLEHCG5sHS-UdCfPTnPfnrHpfMxeKoPBp-HOpkH362IQ.mp4",
  "downloadgram.org_AQN19kcQOCHz5HH3CxefsyHMt7flH6A1cqye3e58b4C2Bx4KoOvMq5vftwXpDJ5vIG0Vpy6yhlZZmQuJa1SpM6uMONLHCDVf-rUgcSY.mp4",
  "downloadgram.org_AQMhVd-mdSTLPy_dJKXBgBaFPMpvj3ftwb-AipaQkxIBPlGQPJ4d_f4jgqHB3D4dbA-X3BOz3DSnHUjutIMX1P5p87If4hGdvgduSZ0.mp4",
  "downloadgram.org_AQNQKrIFknUF_j10w04-N_xaGtKQYTSxfkgtFreWJFahYVss-Yp3ZqvWxX76MwqDkKtfwJEdMH8iH1k1yu9vp-9RS_mAQtxhx-OMG6s.mp4",
  "downloadgram.org_AQPU1wLnUNtXkjFDpS0tWatyab4psO89eqhV1EZUitvaSB-XZNImxTuRjO0tKNaTl5ywQT_Fo6Uljf6SGh3bQKY_7Dv1PUV0mR04OtU.mp4",
  "AQPQCSJjPmMZcwxo5HmrNukviexZosIMmVmIq9j-azsqcEQt5dGoPyygfo5Q2esTFFrfurN7SIQA-K8NCk5Ib02SnH-vK9tr.mp4",
  "downloadgram.org_AQN45DdwTa-s1PBSH-FjP4i8JwACGzVGvxNl1_kR6ECbKfHmRsPAUgq9EY68K8NFpU1ozU6Jt7Ge-Bu-g9ypKLyGzjms_Vl5EPEUDss.mp4",
  "downloadgram.org_AQM0udJDDtBrbG1WZ7xx-LUplZxerKoqZbfGNP1n-oCxS6NPHugF0A1w1w2HQQsKD46LZI3ChJ44aeLYxZEvBxo1PY40GLnitXlOf5E.mp4",
];

const GalerijaPage = () => {
  return (
    <div className="container mx-auto px-2 md:px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">Galerija</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center flex-wrap">
        {images.map((img, idx) => (
          <div key={"img-"+idx} className="flex flex-col items-center min-w-0 max-w-full">
            <div className="relative w-[320px] h-[400px] rounded-xl overflow-hidden shadow-lg bg-black mb-4 flex items-center justify-center min-w-0 max-w-full">
              <Image
                src={`/images/${img}`}
                alt={`Galerija slika ${idx + 1}`}
                fill
                className="object-cover"
                sizes="320px"
                priority={false}
              />
            </div>
          </div>
        ))}
        {videos.map((vid, idx) => (
          <div key={"vid-"+idx} className="flex flex-col items-center min-w-0 max-w-full">
            <div className="relative w-[320px] h-[400px] rounded-xl overflow-hidden shadow-lg bg-black mb-4 flex items-center justify-center min-w-0 max-w-full">
              <video
                src={`/images/${vid}`}
                controls
                className="object-cover w-full h-full"
                style={{ background: 'black' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalerijaPage; 