import { useRef } from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"React Commerce",
        img:"https://images.pexels.com/photos/19487887/pexels-photo-19487887/free-photo-of-a-neon-sign-that-says-babe-you-look-so-happy.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?"

    },
    {
        id:2,
        title:"Next.js Blog",
        img:"https://images.pexels.com/photos/19156891/pexels-photo-19156891/free-photo-of-a-black-and-white-photo-of-a-canal-in-venice.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?"

    },
    {
        id:3,
        title:"Vanilla JS App",
        img:"https://images.pexels.com/photos/10835697/pexels-photo-10835697.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?"

    },
    {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/11101879/pexels-photo-11101879.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?"

    }
]

const Single = ({item}) => {

    const ref= useRef ()
    const {scrollYProgress} = useScroll({
        target: ref,
        // offset:["start start", "end start"] 
    })

    const y = useTransform(scrollYProgress, [0,1], [-300, 300])
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>                
            </div>
        </section>
    )
}




const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref, 
        offset:["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    })





  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio