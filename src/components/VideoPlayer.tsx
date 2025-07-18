import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  onClose: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title, onClose }) => {
  // Extract Vimeo video ID from URL
  const getVimeoId = (url: string) => {
    const match = url.match(/vimeo\.com\/(\d+)/);
    return match ? match[1] : null;
  };

  const vimeoId = getVimeoId(videoUrl);
  const embedUrl = vimeoId ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&title=0&byline=0&portrait=0` : '';

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
          <h3 className="text-white font-semibold text-lg truncate">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200 p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative bg-black" style={{ paddingBottom: '56.25%', height: 0 }}>
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={title}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="text-white ml-1" size={24} />
                </div>
                <p className="text-lg font-medium mb-2">Erro ao carregar vídeo</p>
                <p className="text-gray-400">Verifique o link do vídeo</p>
              </div>
            </div>
          )}
        </div>

        {/* Controls Info */}
        <div className="bg-gray-900 px-6 py-3">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div className="flex items-center space-x-4">
              <span>🎥 Vídeo Aula</span>
              <span>•</span>
              <span>Mapa do Bitcoin</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>Pressione ESC para fechar</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;