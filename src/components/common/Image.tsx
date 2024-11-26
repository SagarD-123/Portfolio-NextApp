import NextImage from 'next/image'

const Image = (props: any) => {
  return (
    <NextImage
      {...props}
      unoptimized
      loading={props.priority ? 'eager' : 'lazy'}
    />
  )
}

export default Image 