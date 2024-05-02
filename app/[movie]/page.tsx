export default function Page({ params }: { params: { movie: string } }) {
  return <div>My Movie: {params.movie}</div>
}