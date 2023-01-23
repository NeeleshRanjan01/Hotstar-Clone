import React, { useEffect, useRef} from 'react'
import "./Carousel.css"

const Carousel = () => {

    let data = [
        {
            id: "1",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9218/1389218-h-2a35a38e4b54",
            title: "Chhichhore",
            details: "Hindi.Drama.2019",
            description: "Divided by time, united by a tragic incident. In a bittersweet reunion, seven middle-aged friends take a walk down the memory lane at the least expected place."
        },
        {
            id: "2",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9225/1389225-h-d564666bc1d5",
            title: "MS Dhoni: The Untold Story",
            details: "Hindi.Biopic.2016",
            description: "A tell-all tale about the life and times of Indian cricketer Mahendra Singh Dhoni, mapping his journey from a ticket collector to a celebrated sportsman. "
        },
        {
            id: "3",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6124/1446124-h-e065fb2df24a",
            title: "Wrong Way",
            details: "Select Picks.Hindi.Horror",
            description: "Shiva sets out to unwind at the picturesque Lonavala accompanied by his four friends. But their road trip turns deadly, with perils lurking at every corner."
        },
        {
            id: "4",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4266/1364266-h-470552ba960d",
            title: "Yeh Rishta Kya Kehlata Hai",
            details: "StarPlus.Hindi.Drama",
            description: "A personal tragedy creates a rift in Abhimanyu and Akshara’s marital life. Years later, when destiny offers a second chance, will the duo embrace love?"
        },
        {
            id: "5",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4292/754292-h",
            title: "Avatar",
            details: "Science.Fiction.2009",
            description: "Former Marine Jake Sully is deployed as an Avatar on a mission to Pandora but, he ultimately finds himself torn between two worlds."
        },
        {
            id: "6",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3568/1443568-h-486ea9769e0d",
            title: "Teri Meri Doriyaann",
            details: "StarPlus.Hindi.Drama",
            description: "It’s hate at first sight for Sahiba and Angad! But destined to be together, their lives get intertwined by a marriage alliance, and a love-hate story ensues."
        },
        {
            id: "7",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8252/1448252-h-d1221044be92",
            title: "Mukundan Unni Associates",
            details: "Crime.2022",
            description: "Fired from a law firm for unethical conduct, Adv Mukundan Unni leaves no stone unturned to achieve success and prosperity. How far will he go in this quest?"
        },
        {
            id: "8",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5422/1445422-h-aa26fdae4221",
            title: "Taaza Khabar",
            details: "Hotstar Specials Fantasy",
            description: "A public toilet caretaker's poverty-stricken life takes a drastic U-turn when he helps an old woman. How long will fate smile upon him?"
        },
        {
            id: "1",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9218/1389218-h-2a35a38e4b54",
            title: "Chhichhore",
            details: "Hindi.Drama.2019",
            description: "Divided by time, united by a tragic incident. In a bittersweet reunion, seven middle-aged friends take a walk down the memory lane at the least expected place."
        },
        {
            id: "2",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9225/1389225-h-d564666bc1d5",
            title: "MS Dhoni: The Untold Story",
            details: "Hindi.Biopic.2016",
            description: "A tell-all tale about the life and times of Indian cricketer Mahendra Singh Dhoni, mapping his journey from a ticket collector to a celebrated sportsman. "
        },
        {
            id: "3",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6124/1446124-h-e065fb2df24a",
            title: "Wrong Way",
            details: "Select Picks.Hindi.Horror",
            description: "Shiva sets out to unwind at the picturesque Lonavala accompanied by his four friends. But their road trip turns deadly, with perils lurking at every corner."
        },
        {
            id: "4",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4266/1364266-h-470552ba960d",
            title: "Yeh Rishta Kya Kehlata Hai",
            details: "StarPlus.Hindi.Drama",
            description: "A personal tragedy creates a rift in Abhimanyu and Akshara’s marital life. Years later, when destiny offers a second chance, will the duo embrace love?"
        },
        {
            id: "5",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4292/754292-h",
            title: "Avatar",
            details: "Science.Fiction.2009",
            description: "Former Marine Jake Sully is deployed as an Avatar on a mission to Pandora but, he ultimately finds himself torn between two worlds."
        },
        {
            id: "6",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3568/1443568-h-486ea9769e0d",
            title: "Teri Meri Doriyaann",
            details: "StarPlus.Hindi.Drama",
            description: "It’s hate at first sight for Sahiba and Angad! But destined to be together, their lives get intertwined by a marriage alliance, and a love-hate story ensues."
        },
        {
            id: "7",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8252/1448252-h-d1221044be92",
            title: "Mukundan Unni Associates",
            details: "Crime.2022",
            description: "Fired from a law firm for unethical conduct, Adv Mukundan Unni leaves no stone unturned to achieve success and prosperity. How far will he go in this quest?"
        },
        {
            id: "8",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5422/1445422-h-aa26fdae4221",
            title: "Taaza Khabar",
            details: "Hotstar Specials Fantasy",
            description: "A public toilet caretaker's poverty-stricken life takes a drastic U-turn when he helps an old woman. How long will fate smile upon him?"
        },
        {
            id: "1",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9218/1389218-h-2a35a38e4b54",
            title: "Chhichhore",
            details: "Hindi.Drama.2019",
            description: "Divided by time, united by a tragic incident. In a bittersweet reunion, seven middle-aged friends take a walk down the memory lane at the least expected place."
        },
        {
            id: "2",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9225/1389225-h-d564666bc1d5",
            title: "MS Dhoni: The Untold Story",
            details: "Hindi.Biopic.2016",
            description: "A tell-all tale about the life and times of Indian cricketer Mahendra Singh Dhoni, mapping his journey from a ticket collector to a celebrated sportsman. "
        },
        {
            id: "3",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6124/1446124-h-e065fb2df24a",
            title: "Wrong Way",
            details: "Select Picks.Hindi.Horror",
            description: "Shiva sets out to unwind at the picturesque Lonavala accompanied by his four friends. But their road trip turns deadly, with perils lurking at every corner."
        },
        {
            id: "4",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4266/1364266-h-470552ba960d",
            title: "Yeh Rishta Kya Kehlata Hai",
            details: "StarPlus.Hindi.Drama",
            description: "A personal tragedy creates a rift in Abhimanyu and Akshara’s marital life. Years later, when destiny offers a second chance, will the duo embrace love?"
        },
        {
            id: "5",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4292/754292-h",
            title: "Avatar",
            details: "Science.Fiction.2009",
            description: "Former Marine Jake Sully is deployed as an Avatar on a mission to Pandora but, he ultimately finds himself torn between two worlds."
        },
        {
            id: "6",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/3568/1443568-h-486ea9769e0d",
            title: "Teri Meri Doriyaann",
            details: "StarPlus.Hindi.Drama",
            description: "It’s hate at first sight for Sahiba and Angad! But destined to be together, their lives get intertwined by a marriage alliance, and a love-hate story ensues."
        },
        {
            id: "7",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8252/1448252-h-d1221044be92",
            title: "Mukundan Unni Associates",
            details: "Crime.2022",
            description: "Fired from a law firm for unethical conduct, Adv Mukundan Unni leaves no stone unturned to achieve success and prosperity. How far will he go in this quest?"
        },
        {
            id: "8",
            img: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5422/1445422-h-aa26fdae4221",
            title: "Taaza Khabar",
            details: "Hotstar Specials Fantasy",
            description: "A public toilet caretaker's poverty-stricken life takes a drastic U-turn when he helps an old woman. How long will fate smile upon him?"
        },

    ]

    const slideRef = useRef(null);

    useEffect(() => {
        const slide = slideRef.current.children;
        let index = 0;

        setInterval(() => {
            if (index === data.length-1) {
                index = 0;
                // window.location.reload()
            }
            slide[index].style.marginLeft = `calc(-${100 * (slide.length - 23)}% - ${30 * (slide.length - 23)}px)`;
            index++;

        }, 5000);

        // return()=>clearInterval(interval)

    }, [data.length]);


    return (
        <div>
            <div className='carousel_container'>
                <div className='carousel' ref={slideRef}>
                    {data.map((data, index) => {
                        return (
                            <div className='slider' key={index}>
                                <div className='slide_content'>
                                    <h1 className='slide_Title'>{data.title}</h1>
                                    <p className='slide_desc'>{data.description}</p>
                                </div>
                                <img src={data.img} alt=''></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Carousel