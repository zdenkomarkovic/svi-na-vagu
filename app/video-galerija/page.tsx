'use client'

import React, { useState } from 'react'
import Image from "next/image";

const videoData = [
  { url: 'https://youtu.be/l_rSTy4tcE8', title: 'Studio B - Svi na vagu', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=aIdU7GlQ8zk', title: 'PRVA - Jutarnji program', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=S8JE5JnvPSk', title: 'PRVA - Zdravlje na prvom mestu', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=j-OWzQ5kEqg', title: 'Euronews Serbia - Reportaža', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=38NNtJN7O-w', title: 'PRVA - Gostovanje', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=hkx2S3iA3zY', title: 'K1 Televizija - Emisija', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=KdRiCTaGSzE', title: 'PRVA - Specijal', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=J78wBHO2dXc', title: 'Zaječarski Dnevnik', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=l_rSTy4tcE8', title: 'Studio B - Svi na vagu (repriza)', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=E9MnOyoj2Tw', title: 'Studio B - Gostovanje', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=KByK8TWbLdc', title: 'Studio B - Intervju', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=mKOeKcR5mFc', title: 'Studio B - Tema dana', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=30N5V0tFxSw', title: 'Novo jutro', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=G4nN5AT43k4', title: 'TV Kopernikus', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=gdgDYN8kDak', title: 'Studio B - Reportaža', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=XtqKrcK-XFw', title: 'K1 Televizija - Gostovanje', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=PcN54DxbxHw', title: 'Dobro Jutro - Jovana & Srđan', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=USw1efWjhqI', title: 'AgroTV Srbija', type: 'youtube' },
  { url: 'https://www.facebook.com/svinavagu/videos/1923797557879465/?vh=e&fs=e&mibextid=wwXIfr&rdid=K8DBi0z1DOwEYKyV#', title: 'Svi na vagu - Facebook', type: 'facebook' },
  // Novi custom video linkovi
  { url: 'https://www.prva.rs/video/150-minuta/99536/da-li-roditelji-imaju-pravo-da-se-ljute-ako-bake-i-deke-ne-zele-da-cuvaju-unuke', title: 'Da li roditelji imaju pravo da se ljute ako bake i deke ne žele da čuvaju unuke?', type: 'custom' },
  { url: 'https://www.prva.rs/video/150-minuta/101528/praznicni-holesterol', title: 'Praznični holesterol', type: 'custom' },
];

function getYoutubeId(url: string) {
  // Regex za izvlačenje YouTube ID-a iz raznih formata linkova
  const regExp = /(?:youtube\.com\/(?:.*v=|(?:v|e(?:mbed)?|shorts)\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

const LazyYoutubeEmbed = ({ videoId }: { videoId: string }) => {
  const [showVideo, setShowVideo] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black relative cursor-pointer group">
      {showVideo ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      ) : (
        <div className="w-full h-full flex items-center justify-center" onClick={() => setShowVideo(true)}>
          <Image
            src={thumbnail}
            alt="YouTube thumbnail"
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
              <polygon points="26,20 48,32 26,44" fill="#fff" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

const CustomVideoPlaceholder = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-red-600 relative cursor-pointer group" onClick={() => window.open(url, '_blank')}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-1/2 h-1/2">
          <Image
            src="/logo-tvprva.png"
            alt={title}
            fill
            className="object-contain transition-transform duration-200 group-hover:scale-105 opacity-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.5)" />
          <polygon points="26,20 48,32 26,44" fill="#fff" />
        </svg>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className='container mx-auto px-2 md:px-4 py-24'>
        <h1 className='text-4xl font-bold text-center mb-10 text-primary'>Video Galerija</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {videoData.map((video, idx) => {
            if (video.type === 'youtube') {
              const id = getYoutubeId(video.url);
              return id ? (
                <div key={idx} className="flex flex-col items-center">
                  <LazyYoutubeEmbed videoId={id} />
                  <span className="mt-2 text-center text-base font-medium text-gray-800">{video.title}</span>
                </div>
              ) : null;
            } else if (video.type === 'facebook') {
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black flex items-center justify-center">
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}`}
                      title={video.title}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                  <span className="mt-2 text-center text-base font-medium text-gray-800">{video.title}</span>
                </div>
              );
            } else {
              return (
                <div key={idx} className="flex flex-col items-center">
                  <CustomVideoPlaceholder url={video.url} title={video.title} />
                  <span className="mt-2 text-center text-base font-medium text-gray-800">{video.title}</span>
                </div>
              );
            }
          })}
        </div>
    </div>
  )
}

export default page