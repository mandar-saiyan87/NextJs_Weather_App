import { RotatingLines } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='mt-36'>
      <RotatingLines
        strokeColor="black"
        strokeWidth="4"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    </div>
  )
}

export default Loading