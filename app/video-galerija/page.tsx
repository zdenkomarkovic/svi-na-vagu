'use client'

import React, { useState } from 'react'
import Image from "next/image";

const videoData = [
  { url: 'https://youtu.be/l_rSTy4tcE8', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=aIdU7GlQ8zk', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=S8JE5JnvPSk', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=j-OWzQ5kEqg', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=38NNtJN7O-w', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=hkx2S3iA3zY', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=KdRiCTaGSzE', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=J78wBHO2dXc', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=l_rSTy4tcE8', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=E9MnOyoj2Tw', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=KdRiCTaGSzE', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=mKOeKcR5mFc', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=30N5V0tFxSw', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=G4nN5AT43k4', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=gdgDYN8kDak', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=XtqKrcK-XFw', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=PcN54DxbxHw', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=USw1efWjhqI', title: '', type: 'youtube' },
  { url: 'https://www.facebook.com/svinavagu/videos/1923797557879465/?vh=e&fs=e&mibextid=wwXIfr&rdid=K8DBi0z1DOwEYKyV#', title: 'Svi na vagu - Facebook', type: 'facebook' },
  // Novi custom video linkovi
  { url: 'https://www.prva.rs/video/150-minuta/99536/da-li-roditelji-imaju-pravo-da-se-ljute-ako-bake-i-deke-ne-zele-da-cuvaju-unuke', title: 'Da li roditelji imaju pravo da se ljute ako bake i deke ne žele da čuvaju unuke?', type: 'custom' },
  { url: 'https://www.prva.rs/video/150-minuta/101528/praznicni-holesterol', title: 'Praznični holesterol', type: 'custom' },
  { url: 'https://www.prva.rs/video/150-minuta/104373/koliko-cesto-smemo-da-jedemo-banane', title: 'Koliko često smemo da jedemo banane? - 150 minuta', type: 'custom' },
  { url: 'https://www.youtube.com/watch?v=ePTCOMWCJdQ&ab_channel=Novojutro', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=JEGOlD11JAY&ab_channel=TanjugTV', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=nb-bcnJiPSo&ab_channel=K1Televizija', title: '', type: 'youtube' },
  { url: 'https://www.youtube.com/watch?v=6pz_-sKqh6o&ab_channel=EuronewsSerbia', title: '', type: 'youtube' },
];

function getYoutubeId(url: string) {
  // Regex za izvlačenje YouTube ID-a iz raznih formata linkova
  const regExp = /(?:youtube\.com\/(?:.*v=|(?:v|e(?:mbed)?|shorts)\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

// Funkcija za dobijanje YouTube naslova
async function getYoutubeTitle(videoId: string): Promise<string> {
  try {
    // Koristimo oEmbed API koji je besplatan i ne zahteva API ključ
    const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    if (response.ok) {
      const data = await response.json();
      return data.title || 'YouTube Video';
    }
  } catch (error) {
    console.error('Greška pri učitavanju YouTube naslova:', error);
  }
  return 'YouTube Video';
}

const LazyYoutubeEmbed = ({ videoId }: { videoId: string }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [title, setTitle] = useState<string>('');
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  // Učitaj naslov kada se komponenta mountuje
  React.useEffect(() => {
    const loadTitle = async () => {
      const videoTitle = await getYoutubeTitle(videoId);
      setTitle(videoTitle);
    };
    loadTitle();
  }, [videoId]);

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
          {/* Naslov overlay */}
          {title && (
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-3">
              <h3 className="text-white text-sm font-semibold leading-tight">{title}</h3>
            </div>
          )}
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
      {/* Naslov overlay */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-red-800/90 to-transparent p-3 z-10">
        <h3 className="text-white text-sm font-semibold leading-tight">{title}</h3>
      </div>
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

const InstagramReelEmbed = ({ url, title }: { url: string; title: string }) => {
  return (
    <div className="w-full max-w-[340px] aspect-[9/16] rounded-lg overflow-hidden shadow-lg bg-black flex items-center justify-center relative">
      {/* Naslov overlay */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-3 z-10">
        <h3 className="text-white text-sm font-semibold leading-tight">{title}</h3>
      </div>
      <iframe
        src={`https://www.instagram.com/p/${url.split('/reel/')[1]?.split('/')[0]}/embed/`}
        title={title}
        allow="autoplay; encrypted-media"
        allowFullScreen
        className="w-full h-full"
        style={{ maxWidth: '340px', aspectRatio: '9/16' }}
      ></iframe>
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
                </div>
              ) : null;
            } else if (video.type === 'facebook') {
              return (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black flex items-center justify-center relative">
                    {/* Naslov overlay */}
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/80 to-transparent p-3 z-10">
                      <h3 className="text-white text-sm font-semibold leading-tight">{video.title}</h3>
                    </div>
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.url)}`}
                      title={video.title}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              );
            } else if (video.type === 'reel') {
              return (
                <div key={idx} className="flex flex-col items-center">
                  <InstagramReelEmbed url={video.url} title={video.title} />
                </div>
              );
            } else {
              return (
                <div key={idx} className="flex flex-col items-center">
                  <CustomVideoPlaceholder url={video.url} title={video.title} />
                </div>
              );
            }
          })}
        </div>
    </div>
  )
}

export default page