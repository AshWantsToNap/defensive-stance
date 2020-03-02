import React, {useState, useCallback, useEffect} from 'react'
import {useTransition, animated } from 'react-spring'
import '../style/components/animations.scss'
import sec from '../../content/assets/security-logo.png'
import cysa from '../../content/assets/cysa-logo.png'
import cissp from '../../content/assets/cissp-logo.png'

const pages = [
    ({style}) => <animated.div style={{
        ...style,
        background: 'lightblue'
    }}>
        <img 
            src={cysa} 
            alt="CompTIA Cyber Security Analyst+ Ceritified" 
            style={{
                width: `100%`, 
                height: `100%`
        }}/>
    </animated.div>,
    ({style}) => <animated.div style={{
        ...style,
        background: 'lightpink'
    }}>
        <img
            src={sec}
            alt="CompTIA Security+ Ceritified"
            style={{
            width: `70%`,
            height: `65%`
        }}/>
    </animated.div>,
    ({style}) => <animated.div
            style={{
            ...style,
            background: 'lightgreen'
        }}>
            In Progress
            <img 
                src={cissp} 
                alt="CISSP Certification In Progress"
                style={{
                    width: `60%`, 
                    height: `60%`
            }}/>
        </animated.div>
]

export default function Certs() {
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 3), [])
    const transitions = useTransition(index,
        p => p, {
            from: {
                opacity: 0,
                transform: 'translate3d(100%,0,0)'
            },
            enter: {
                opacity: 1,
                transform: 'translate3d(0%,0,0)'
            },
            leave: {
                opacity: 0,
                transform: 'translate3d(-50%,0,0)'
            }
        }
    )
    
    useEffect(() => void setInterval(() => set(state => (state + 1) % 3), 5000), [])
return (
    <div className="simple-trans-main" onClick={onClick}>
        {
            transitions.map(({item, props, key}) => {
                const Page = pages[item]
                return <Page key={key} style={props}/>
            })
        }
    </div>
)
}