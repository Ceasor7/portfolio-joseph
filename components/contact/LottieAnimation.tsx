'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

type Props = {};

const LottieAnimation = (props: Props) => {
  return (
    <DotLottiePlayer
      src="/animation_llqd7ey4.lottie"
      autoplay
      loop
    ></DotLottiePlayer>
  );
};

export default LottieAnimation;
