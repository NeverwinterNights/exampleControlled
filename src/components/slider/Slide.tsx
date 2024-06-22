import React from 'react'

interface SlideProps {
  content: string
}

export const Slide: React.FC<SlideProps> = ({ content }) => {
  return <div className={'slide'}>{content}</div>
}
