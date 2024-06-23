type TOpenPageHeadingContent ={
    title: string,
}
const OpenPageHeadingContent = ({title}: TOpenPageHeadingContent) => {
    return (
        <div className="flex items-center">
            <h5 className="text-lg font-semibold md:text-2xl">{title}</h5>
        </div>
    )
}

export default OpenPageHeadingContent;