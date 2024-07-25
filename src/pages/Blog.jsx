import React from 'react'
import Lottie from "lottie-react";
import ComingSoon from "../LottieFiles/coming-soon.json";
// import Typewriter from 'typewriter-effect';

const Blog = () => {
    return (
        <>
            <div className='BlogPage'>
                <Lottie
                    className="illustration"
                    animationData={ComingSoon}
                    loop={true}
                />
                {/* <div className="TypeEffect" style={{ textAlign: "center" }}>
                    <Typewriter
                        options={{
                            strings: ['Coming Soon...'],
                            autoStart: true,
                            loop: true,
                            delay: 70,
                            deleteSpeed: 20,
                        }}
                    />
                </div> */}
            </div>
        </>
    )
}

export default Blog
