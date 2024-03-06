import { useRef } from "react"
import Lottie from "lottie-react"
import AnimationSpace from "../assets/AnimationSpace.json"
import "./lottie.css"

export const LottieComponent = () => {
    const options = {
        animationData: AnimationSpace,
        style: {
            height: 100,
            padding: 10
        }
        ,
        loop: true,
        autoplay: false,
        lottieRef: useRef()
        //,
        // To show console message for every loop
        //     loopComplete: () => console.log("I looped one time!")
        // 
    }

    const handlePlay = () => {
        if (options.lottieRef.current) {
            options.lottieRef.current.play()
        }
    }

    const handleStop = () => {
        if (options.lottieRef.current) {
            options.lottieRef.current.stop()
        }
    }

    return (
        <>
            <Lottie
                lottieRef={options.lottieRef}
                animationData={options.animationData}
                style={options.style}
                loop={options.loop}
                autoplay={options.autoplay}
            //To show console message for every loop onLoopComplete={options.loopComplete}
            />
            <div>
                <button onClick={handlePlay}>Make astronaut hover</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </>
    )
}