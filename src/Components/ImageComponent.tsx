import imageBack from '../assets/image.jpg';

export default function ImageComponent() {
  return (
    <div>
      <img src={imageBack} alt="BackGroundImage" className='w-[566px] mpro:w-[566px] fuhd:w-[796px] fuhd:h-[1022px] '/>
    </div>
  )
}
