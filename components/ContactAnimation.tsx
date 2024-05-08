'use client';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

type Props = {};

const ContactAnimation = (props: Props) => {
  return (
    <DotLottiePlayer
      src="/animation_llqd7ey4.lottie"
      autoplay
      loop
      className=" h-16 w-full"
    ></DotLottiePlayer>
  );
};

export default ContactAnimation;
