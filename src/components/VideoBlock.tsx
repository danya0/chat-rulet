import React, { useEffect, useRef, useState } from 'react'
import { Button } from './ui/Button'
import { IconButton } from './ui/IconButton'

export const VideoBlock: React.FC = () => {
  const [isVideoEnabled, setIsVideoEnabled] = useState(false)
  const [isAudioEnabled, setIsAudioEnabled] = useState(false)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const fn = async () => {
      if (isVideoEnabled) {
        // enable stream
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        })
        setStream(stream)

        if (videoRef.current) videoRef.current.srcObject = stream
      } else {
        // disable stream
        const tracks = stream?.getTracks()
        if (tracks) tracks.forEach((track) => track.stop())
      }
    }

    fn()
  }, [isVideoEnabled])

  return (
    <div className="w-[40%] p-4 gap-y-4 flex flex-col">
      {/* My video window */}

      {/* Interlocutor's video window */}
      <div className="grow bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400">
          Видео собеседника
        </span>
      </div>
      <div className="grow bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center relative overflow-hidden">
        <span className="text-gray-500 dark:text-gray-400">Мое видео</span>

        <video
          ref={videoRef}
          autoPlay={true}
          muted={true}
          className="bg-black absolute left-0 w-full top-0 h-full"
        />

        {/* Controls */}
        <div className="absolute bottom-4 flex gap-x-2">
          <IconButton
            onClick={() => setIsVideoEnabled(!isVideoEnabled)}
            active={isVideoEnabled}
            title={isVideoEnabled ? 'Выключить видео' : 'Включить видео'}
          >
            {isVideoEnabled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
            )}
          </IconButton>

          <IconButton
            onClick={() => setIsAudioEnabled(!isAudioEnabled)}
            active={isAudioEnabled}
            title={isAudioEnabled ? 'Выключить микрофон' : 'Включить микрофон'}
          >
            {isAudioEnabled ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Button fullWidth>Далее</Button>
    </div>
  )
}
