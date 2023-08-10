interface CardPhotoProps {
    imageUrl: string,
    time: string,
}

const CardPhoto = (props: CardPhotoProps) => {
  const {imageUrl, time } = props
  return (
    <div className="flex justify-center items-center min-h-[300px] relative bg-no-repeat bg-cover" style={{backgroundImage: `url(${imageUrl})`}}>
        {/* <img
        // srcSet="/path/to/image-480w.jpg 480w,
        //         /path/to/image-768w.jpg 768w,
        //         /path/to/image-1024w.jpg 1024w"
        // sizes="(max-width: 480px) 100vw,
        //        (max-width: 768px) 50vw,
        //        33.3vw"
        className="max-w-full h-auto"
        src={imageUrl}
        alt="Image"
        loading="lazy"
      /> */}
      <div className="absolute left-0 bottom-0 text-white p-2 bg-primary-300 font-[15px]">
        {time}
      </div>
    </div>
  )
}

export default CardPhoto