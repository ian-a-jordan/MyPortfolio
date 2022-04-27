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
                <SkillsSections skill={'Javascript'} progress={'70%'} width={'70%'}/>
                <SkillsSections skill={'Solidity'} progress={'40%'} width={'40%'}/>
                <SkillsSections skill={'C#'} progress={'70%'} width={'70%'}/>
                <SkillsSections skill={'React'} progress={'90%'} width={'90%'}/>
                <SkillsSections skill={'Node.js'} progress={'90%'} width={'90%'}/>
                <SkillsSections skill={'SQL'} progress={'70%'} width={'70%'}/>
                <SkillsSections skill={'MongoDB'} progress={'40%'} width={'40%'}/>
                <SkillsSections skill={'.NET'} progress={'60%'} width={'60%'}/>
                <SkillsSections skill={'HTML5'} progress={'100%'} width={'100%'}/>
                <SkillsSections skill={'CSS3'} progress={'90%'} width={'90%'}/>
                <SkillsSections skill={'Blazor (WebAssembly)'} progress={'60%'} width={'60%'}/>
                <SkillsSections skill={'Express'} progress={'55%'} width={'55%'}/>
                <SkillsSections skill={'GIT'} progress={'90%'} width={'90%'}/>
            </div>
            <Title title={'Services'} span={'Services'} />
            <div className="services-container">
                <ServicesSection image={design} title={'Front-end Technology'} text={'HTML5, CSS3, Javascript, React, Web3, MaterialUI, Blazor'}/>
                <ServicesSection image={design} title={'Back-end Development'} text={'.NET, C#, Node.js, SQL, Solidity'}/>
                <ServicesSection image={design} title={'Database and Cache'} text={'SQL(Structed Query Language), MongoDB, Azure'}/>
            </div>
        </motion.div>
    )
}

export default AboutPage;
