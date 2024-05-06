import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const SubtitleType = () => {
  return (
    <TypeAnimation
        sequence={['El lugar donde compartir tus hobbies',1000,'El lugar donde mantenerte informado',1000,'El lugar donde reir y disfrutar',1000,'El lugar donde ser tú mismo',5000]}
        wrapper='span'
        repeat={Infinity}
        style={{display:'inline-block', fontSize:'1.5em'}}
    />
  )
}

export default SubtitleType
