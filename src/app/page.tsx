import { CardReleased } from '@/components/CardReleased'
import { getReleases } from '@/lib/getReleases'

export default async function Home() {
	const releases = await getReleases()

	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
			<h1 className='flex justify-center items-center font-bold text-3xl mb-12'>
				NextJS Releases Bot
			</h1>
			<CardReleased releases={releases} />
		</main>
	)
}
