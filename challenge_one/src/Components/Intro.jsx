//src/Components/Intro.jsx
import img from '/me.jpg';

export default function Intro() {
    const me = img;
  return (
    <div className='flex flex-col justify-center'>
     <div className='items-start'>
         <img
            className="rounded-full h-50 w-50 mx-auto border border-gray-200 justify-self-start"
         height={50}
            width={50}
         src={me} alt="Ryan Wilson" />
     </div>
     <p>
        My name is Ryan Wilson and I am a web developer based in Ontario Canada with a passion for creating beautiful, performant and functional websites.
     </p>
    </div>
  )
}
