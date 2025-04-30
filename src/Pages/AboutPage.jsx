import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSections from '../Components/SkillsSections';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg'
import {motion} from 'framer-motion';

function AboutPage() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity:1 }} exit={{opacity: 0}} className="AboutPage">
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Title title={'My Skills'} span={'My Skills'} />
            <div className="skils-container">
                <SkillsSections skill={'Javascript'} progress={'90%'} width={'90%'}/>
                <SkillsSections skill={'C#'} progress={'85%'} width={'85%'}/>
                <SkillsSections skill={'VB'} progress={'80%'} width={'80%'}/>
                <SkillsSections skill={'React'} progress={'90%'} width={'90%'}/>
                <SkillsSections skill={'Node.js'} progress={'90%'} width={'90%'}/>
                <SkillsSections skill={'SQL'} progress={'75%'} width={'75%'}/>
                <SkillsSections skill={'MongoDB'} progress={'20%'} width={'20%'}/>
                <SkillsSections skill={'.NET'} progress={'85%'} width={'85%'}/>
                <SkillsSections skill={'HTML5'} progress={'100%'} width={'100%'}/>
                <SkillsSections skill={'CSS'} progress={'95%'} width={'95%'}/>
                <SkillsSections skill={'Blazor'} progress={'70%'} width={'70%'}/>
                <SkillsSections skill={'GIT'} progress={'80%'} width={'80%'}/>
            </div>
            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Front-end Technology'} text={'HTML5, CSS3, Javascript, React, Web3, Material UI, Blazor, VB'}/>
                <ServicesSection image={design} title={'Back-end Development'} text={'.NET, C#, Node.js, SQL'}/>
                <ServicesSection image={design} title={'Database and Cache'} text={'SQL, MongoDB, Azure'}/>
            </div>
        </motion.div>
    )
}

export default AboutPage;
