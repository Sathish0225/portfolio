import React from 'react'
import Typewriter from 'typewriter-effect';

const Blog = () => {
    return (
        <>
            <div className='BlogPage'>
                <div className="TypeEffect">
                    <Typewriter
                        options={{
                            strings: ['Coming Soon...'],
                            autoStart: true,
                            loop: true,
                            delay: 70,
                            deleteSpeed: 20,
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Blog
