"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// Automatski generisana lista slika iz public/images
const images = [
  "20251228_123836.jpg",
  "IMG-0ff82faf711070109a0f6b153e4a4def-V.jpg",
  "IMG-1a670e71f03a45e917060b56279e8351-V.jpg",
  "IMG-1e30171cf2560fbe87c11b090b33e1f3-V.jpg",
  "IMG-2a4d8e61ecbd59204b2bb70ebd7fcd24-V.jpg",
  "IMG-2a52e60b85ab785a0e133e945125e7fe-V.jpg",
  "IMG-2a55aa3d05470735fc76312663e984ec-V.jpg",
  "IMG-2c798c240702c73d6d93e66eed07214a-V.jpg",
  "IMG-3e51aa22684fd1a286b4972949dbfae0-V.jpg",
  "IMG-04b89273b660c602139f017c648aa0de-V.jpg",
  "IMG-04cccf73d12829d126473d575d93f70d-V.jpg",
  "IMG-04f03476c881371d9b31c70abd9a2758-V.jpg",
  "IMG-4b51660bc774ddad6c84773d7dad577b-V.jpg",
  "IMG-5ce99f9499e6dfa36cdf726c67018dc6-V.jpg",
  "IMG-8b292b8be8448288dcf24b4d8b6e36c9-V.jpg",
  "IMG-16a8846cb234b9ad1a1d584ff9e416da-V.jpg",
  "IMG-77bb15039e09b01ca45b66687490f56d-V.jpg",
  "IMG-81bd747f479c9156b6f9f6546da805e3-V.jpg",
  "IMG-9286e79032b1f9821e1e410aad237031-V.jpg",
  "IMG-134616c4900649ddabd38a6618df4d7b-V.jpg",
  "IMG-422149bb7a5e86a6e37b81d7021c9034-V.jpg",
  "IMG-481678eaeea689530d1669b6a6da0a45-V.jpg",
  "IMG-9439031e728c13bc7c4bf32016f24997-V.jpg",
  "IMG-043566753824c4593f82b11f000776b4-V.jpg",
  "IMG-a6e35be2204e642524b969508b0a043e-V.jpg",
  "IMG-a83980ecf2b9ae67b69c9bb06ed15cfe-V.jpg",
  "IMG-bb29873fbce3d1c7c617e005690dbafd-V.jpg",
  "IMG-ca8997d7d1c10960e0cd1b074687de36-V.jpg",
  "IMG-cd349eea8412377109aec5252c15d684-V.jpg",
  "IMG-e73d12406f4478028e1b985aab56f3a8-V.jpg",
  "IMG-e918ad30c4f2a13778c8717407222635-V.jpg",
  "IMG-e955ce8863481983e548f2622054e67a-V.jpg",
  "IMG-e9710bf6e60e2a9ffd56faf2cefe94db-V.jpg",
  "IMG-eed506c098b25bf9cab2ed5169006b8d-V.jpg",
  "IMG-f5cdf31cf69e8c2dea6421b22fffe6ca-V.jpg",
  "IMG-f033cd6d275b25a6a69b0447b5a443e5-V.jpg",
  "IMG-ffebb2f6d7e23656ce1edd614c26ab15-V.jpg",
  "IMG-5ce99f9499e6dfa36cdf726c67018dc6-V.jpg",
  "IMG-1e30171cf2560fbe87c11b090b33e1f3-V.jpg",
  "IMG-38b2bc1b6abdfad920f8e752718aac06-V.jpg",
  "IMG-027e442f8a7ab23e4888092424edbcdb-V.jpg",
  "IMG-a69c554c6276aae7f7060c60f42553c1-V.jpg",
  "IMG-84bd4da1fa9d13dbee20aac487f168fc-V.jpg",
  "IMG-369c8ee6e87472a9691b0a565906ff65-V.jpg",
  "IMG-055a4c88646840b2d914938cd3b26dfd-V.jpg",
  "IMG-00bd3ff26ad1335284a787f50dc1a5df-V.jpg",
  "IMG-ed2631868b90c5b4e3a9f88c2899828d-V.jpg",
  "20251004_191002.jpg",
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
  // "downloadgram.org_553108463_18421617601128409_5216579457744545894_n.jpg",
];

const videos = [
  "/downloadgram.org_AQOeesYf9veKd0Pkn2vFlv-XPTkCv2AOCX5-_mIem_yCItPHuxvA1I5oV2P6ww4Ms8I5xxdJLLgvVemEULe3d50py44b2TirLu1NFnQ.mp4",
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
  "downloadgram.org_AQMbDhVu3yZ05UVRoumlKpKbUOzfwbGhIf-2xT8to00dnfxgOUVoDLFKIn5XM7Ade_DYp4WE-qd10PmqOVhO_zL9FuarWDR2wz5LyXs.mp4",
];

const ITEMS_PER_PAGE = 6;

const GalerijaPage = () => {
  const [imagePage, setImagePage] = useState(1);
  const [videoPage, setVideoPage] = useState(1);

  // Izračunavanje za slike
  const totalImagePages = Math.ceil(images.length / ITEMS_PER_PAGE);
  const startImageIndex = (imagePage - 1) * ITEMS_PER_PAGE;
  const endImageIndex = startImageIndex + ITEMS_PER_PAGE;
  const currentImages = images.slice(startImageIndex, endImageIndex);

  // Izračunavanje za video zapise
  const totalVideoPages = Math.ceil(videos.length / ITEMS_PER_PAGE);
  const startVideoIndex = (videoPage - 1) * ITEMS_PER_PAGE;
  const endVideoIndex = startVideoIndex + ITEMS_PER_PAGE;
  const currentVideos = videos.slice(startVideoIndex, endVideoIndex);

  return (
    <div className="container mx-auto px-2 md:px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-10 text-primary">
        Galerija
      </h1>

      {/* Sekcija za slike */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-primary">Slike</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center flex-wrap">
          {currentImages.map((img, idx) => (
            <div
              key={"img-" + idx}
              className="flex flex-col items-center min-w-0 max-w-full"
            >
              <div className="relative w-[320px] h-[400px] rounded-xl overflow-hidden shadow-lg bg-black mb-4 flex items-center justify-center min-w-0 max-w-full">
                <Image
                  src={`/images/${img}`}
                  alt={`Galerija slika ${startImageIndex + idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="320px"
                  priority={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Paginacija za slike */}
        {totalImagePages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              onClick={() => setImagePage((prev) => Math.max(prev - 1, 1))}
              disabled={imagePage === 1}
              variant="outline"
            >
              Prethodna
            </Button>
            <span className="text-sm">
              Strana {imagePage} od {totalImagePages}
            </span>
            <Button
              onClick={() =>
                setImagePage((prev) => Math.min(prev + 1, totalImagePages))
              }
              disabled={imagePage === totalImagePages}
              variant="outline"
            >
              Sledeća
            </Button>
          </div>
        )}
      </div>

      {/* Sekcija za video zapise */}
      <div>
        <h2 className="text-3xl font-bold mb-6 text-primary">Video zapisi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto justify-center flex-wrap">
          {currentVideos.map((vid, idx) => (
            <div
              key={"vid-" + idx}
              className="flex flex-col items-center min-w-0 max-w-full"
            >
              <div className="relative w-[320px] h-[400px] rounded-xl overflow-hidden shadow-lg bg-black mb-4 flex items-center justify-center min-w-0 max-w-full">
                <video
                  src={`/images/${vid}`}
                  controls
                  className="object-cover w-full h-full"
                  style={{ background: "black" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Paginacija za video zapise */}
        {totalVideoPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              onClick={() => setVideoPage((prev) => Math.max(prev - 1, 1))}
              disabled={videoPage === 1}
              variant="outline"
            >
              Prethodna
            </Button>
            <span className="text-sm">
              Strana {videoPage} od {totalVideoPages}
            </span>
            <Button
              onClick={() =>
                setVideoPage((prev) => Math.min(prev + 1, totalVideoPages))
              }
              disabled={videoPage === totalVideoPages}
              variant="outline"
            >
              Sledeća
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalerijaPage;
