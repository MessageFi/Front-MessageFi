"use client";
import { useState } from 'react';
import Link from 'next/link'
import { Container } from '@/components/Container'
import { EpisodePlayButton } from '@/components/EpisodePlayButton'
import { FormattedDate } from '@/components/FormattedDate'
import { getAllEpisodes } from '@/lib/episodes'
import { ThumbUpIcon } from '@heroicons/react/solid';

function EpisodeEntry({ episode }) {
  let date = new Date(episode.published)

  const [coinCount, setCoinCount] = useState(episode.coinDonation || 0);

  const handleCoinClick = () => {
    setCoinCount(prevCount => prevCount + 1);
  }

  return (
    <article
      aria-labelledby={`episode-${episode.id}-title`}
      className="py-10 sm:py-12 relative"
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Title */}
          <h2
            id={`episode-${episode.id}-title`}
            className="mt-2 text-lg font-bold text-slate-900 flex-grow"
          >
            <Link href={`/${episode.id}`}>{episode.title}</Link>
          </h2>

          {/* Heat Indicator */}
          <div className="flex items-center p-2 rounded-md ml-4">
            <span className="mr-2">🔥</span>
            <span>{episode.articleHeat}</span>
          </div>
        </div>

        <FormattedDate
          date={date}
          className="order-first font-mono text-sm leading-7 text-slate-500"
        />

        <p className="mt-1 text-base leading-7 text-slate-700">
          {episode.description}
        </p>

        <div className="mt-4 flex items-center gap-4 justify-between">
          {/* Play button and show notes */}
          <div className="flex items-center gap-4">
            <>
              <Link
                href={`/${episode.id}`}
                className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                aria-label={`Show notes for episode ${episode.title}`}
              >
                Show notes
              </Link>
            </>
          </div>

          {/* Coin Donation Indicator */}
          <div className="relative ml-4">
            <button
              className="flex items-center bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-md shadow-md"
              onClick={handleCoinClick}
            >
              <ThumbUpIcon className="h-5 w-5 mr-2" />
              {coinCount}
            </button>
          </div>
        </div>
      </Container>
    </article>
  )
}

export default async function Home() {
  let episodes = await getAllEpisodes()

  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <Container>
        <div className='flex flex-row justify-between items-center'>
          <h1 className="text-2xl font-bold leading-7 text-slate-900">
            Rounde #1
          </h1>
          <div>
            <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out">
              New Message
            </button>
          </div>
        </div>
      </Container>
      <div className="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">
        {episodes.map((episode) => (
          <EpisodeEntry key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  )
}

export const revalidate = 10
