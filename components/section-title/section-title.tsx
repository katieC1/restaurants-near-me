

export default function SectionTitle({ titleText }: { titleText: string }) {
    return (
        <div className='pb-2 md:pb-4 lg:pb-5 text-center'>
            <h1>{titleText}</h1>
        </div>
    )
}
